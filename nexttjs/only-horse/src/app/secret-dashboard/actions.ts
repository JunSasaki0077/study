"use server";

import prisma from "@/db/prisma";
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
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  if (!user || !isAdmin) {
    throw new Error("Unauthorized");
  }

  const newPost = await prisma.post.create({
    data: {
      text,
      mediaUrl,
      mediaType,
      isPublic,
      userId: user.id,
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

async function checkIfAdmin() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  if (!user || !isAdmin) return false;

  return true;
}
