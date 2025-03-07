"use server";

import prisma from "@/db/prisma";
import { centsToDalls } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type PostArgs = {
  text: string;
  mediaUrl: string;
  mediaType: "image" | "video";
  isPublic: boolean;
};

type ProductArgs = {
  name: string;
  image: string;
  price: string;
};

export async function createPostAction({
  isPublic,
  mediaUrl,
  mediaType,
  text,
}: PostArgs) {
  const admin = await checkIfAdmin();

  if (!admin) {
    throw new Error("Unauthorized");
  }

  const newPost = await prisma.post.create({
    data: {
      text,
      mediaUrl,
      mediaType,
      isPublic,
      userId: admin.id,
    },
  });
  return { success: true, post: newPost };
}

export async function getAllProductsAction() {
  const isAdmin = await checkIfAdmin();

  if (!isAdmin) {
    throw new Error("Unauthorized");
  }

  const products = await prisma.product.findMany();

  return products;
}

export async function addNewProductToStoreAction({
  name,
  image,
  price,
}: ProductArgs) {
  const isAdmin = await checkIfAdmin();

  if (!isAdmin) {
    throw new Error("Unauthorized");
  }

  if (!name || !image || !price) {
    throw new Error("必須項目を全て入力してください。");
  }

  const priceInCents = Math.round(parseFloat(price) * 100);

  if (isNaN(priceInCents)) {
    throw new Error("価格は数字で入力してください。");
  }

  const newProduct = await prisma.product.create({
    data: {
      image,
      price: priceInCents,
      name,
    },
  });
}

export async function toggleProductArchiveAction(productId: string) {
  const isAdmin = await checkIfAdmin();

  if (!isAdmin) {
    throw new Error("Unauthorized");
  }

  const product = await prisma.product.findUnique({ where: { id: productId } });

  if (!product) {
    throw new Error("商品が見つかりません。");
  }

  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: {
      isArchived: !product.isArchived,
    },
  });

  return { success: true, product: updatedProduct };
}

export async function getDashboardData() {
  const totalRevenuePromise = Promise.all([
    prisma.order.aggregate({
      _sum: {
        price: true,
      },
    }),
    prisma.subscription.aggregate({
      _sum: {
        price: true,
      },
    }),
  ]);

  const totalSalesPromise = prisma.order.count();
  const totalSubscriptionsPromise = prisma.subscription.count();

  const recentSalesPromise = prisma.order.findMany({
    take: 4,
    orderBy: {
      orderDate: "desc",
    },
    select: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },
      price: true,
      orderDate: true,
    },
  });

  const recentSubscriptionsPromise = prisma.subscription.findMany({
    take: 4,
    orderBy: {
      startDate: "desc",
    },
    select: {
      user: {
        select: {
          name: true,
          email: true,
          image: true,
        },
      },

      price: true,
      startDate: true,
    },
  });

  const [
    totalRevenueResult,
    totalSales,
    totalSubscriptions,
    recentSales,
    recentSubscriptions,
  ] = await Promise.all([
    totalRevenuePromise,
    totalSalesPromise,
    totalSubscriptionsPromise,
    recentSalesPromise,
    recentSubscriptionsPromise,
  ]);

  const totalRevenue =
    (totalRevenueResult[0]._sum.price || 0) +
    (totalRevenueResult[1]._sum.price || 0);

  return {
    totalRevenue: centsToDalls(totalRevenue),
    totalSales,
    totalSubscriptions,
    recentSales,
    recentSubscriptions,
  };
}

async function checkIfAdmin() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  if (!user || !isAdmin) return false;

  return user;
}
