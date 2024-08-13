import UnderlinedText from "@/components/decorators/UnderlinedText";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ZoomedImage from "@/components/ZoomedImage";
import { centsToDalls } from "@/lib/utils";
import Link from "next/link";

const PurchaseSummary = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center">
        <ZoomedImage
          imgSrc="/tshirts/1.png"
          className="h-96 w-96 rounded-md my-5"
        />
        <h1 className="text-2xl font-bold mb-4">
          Purchase <UnderlinedText>Successful!</UnderlinedText>
          🎉
        </h1>

        <p className="text-center text-md mb-6">
          Your order is being processed and you will receive a confirmation
          email shortly. If you don't receive an email within 24 hours, please
          contact us with your order Id.
        </p>

        <p className="text-muted-foreground">
          Order ID:{" "}
          <span className="font-bold text-foreground text-sky-400">
            {/* {orderId} */}
            12345678
          </span>
          <Card className="w-full my-5">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between">
                <p>
                  {/* {order.product.name} */}
                  OnlyHorse T-shirt
                </p>
                <p>
                  {/* ${centsToDalls(order.product.pride)} */}
                  $11,99
                </p>
              </div>
              <div className="flex justify-between">
                <p>Size: Small</p>
                <p>Quantity: 1</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Shipping Address</h3>
                <p>Address: {}</p>
                <p>City: {}</p>
                <p>State: {}</p>
                <p>Postal Code: {}</p>
                <p>Country: {}</p>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-md mb-6 text-muted-foreground text-lg">
            Thanks for trusting us with your purchase!
          </p>
          <div className="flex justify-center">
            <Link href={"/merch"} className={buttonVariants()}>
              Continue Shopping
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};
export default PurchaseSummary;
