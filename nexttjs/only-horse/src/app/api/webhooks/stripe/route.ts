import prisma from "@/db/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { Resend } from "resend";
import WelcomeEmail from "@/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const webhookSecret =
  process.env.NODE_ENV === "development"
    ? process.env.STRIPE_WEBHOOK_SECRET_DEV_KEY!
    : process.env.STRIPE_WEBHOOK_SECRET_LIVE_KEY!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return new Response("Invalid signature", { status: 400 });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  const data = event.data;
  const eventType = event.type;

  try {
    switch (eventType) {
      case "checkout.session.completed": {
        const session = await stripe.checkout.sessions.retrieve(
          (data.object as Stripe.Checkout.Session).id,
          {
            expand: ["line_items", "customer_details"],
          }
        );
        const customerId = session.customer as string;
        const customerDetails =
          session.customer_details as Stripe.Checkout.Session.CustomerDetails;
        const lineItems = session.line_items?.data || [];

        if (customerDetails.email) {
          const user = await prisma.user.findUnique({
            where: { email: customerDetails.email },
          });
          if (!user) throw new Error("User not found");

          if (!user.customerId) {
            await prisma.user.update({
              where: { id: user.id },
              data: { customerId },
            });
          }

          for (const item of lineItems) {
            const priceId = item.price?.id;
            const isSubscription = item.price?.type === "recurring";

            if (isSubscription) {
              let endDate = new Date();
              if (priceId === process.env.STRIPE_YEARLY_PLAN_PRICE_ID) {
                endDate.setFullYear(endDate.getFullYear() + 1);
              } else if (priceId === process.env.STRIPE_MONTHLY_PLAN_PRICE_ID) {
                endDate.setMonth(endDate.getMonth() + 1);
              } else {
                throw new Error("Invalid price id");
              }
              const subscription = await prisma.subscription.upsert({
                where: { userId: user.id },
                update: {
                  planId: priceId,
                  startDate: new Date(),
                  endDate: endDate,
                  price: item.amount_total || 0,
                },
                create: {
                  userId: user.id,
                  planId: priceId!,
                  price: item.amount_total || 0,
                  startDate: new Date(),
                  endDate: endDate,
                },
              });

              await prisma.user.update({
                where: { id: user.id },
                data: { isSubscribed: true },
              });

              await resend.emails.send({
                from: "OnlyHorse <onboarding@resend.dev>",
                to: [customerDetails.email],
                subject: "Subscription Confirmation",
                react: WelcomeEmail({
                  userEmail: customerDetails.email,
                  userName: user.name,
                  subscriptionStartDate: subscription.startDate,
                  subscriptionEndDate: subscription.endDate,
                }),
              });
            } else {
              // TODO=> Handle one time payment(buying tshirts)
            }
          }
        }
        break;
      }
      case "customer.subscription.deleted": {
        const subscription = await stripe.subscriptions.retrieve(
          (data.object as Stripe.Subscription).id
        );
        const user = await prisma.user.findUnique({
          where: { customerId: subscription.customer as string },
        });
        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: { isSubscribed: false },
          });
        } else {
          console.error("User not found for the subscription deleted event.");
          throw new Error("User not found for the subscription deleted event.");
        }
        break;
      }

      default:
        console.warn(`Unhandled event type: ${eventType}`);
        break;
    }
    return NextResponse.json({});
  } catch (error) {}
}
