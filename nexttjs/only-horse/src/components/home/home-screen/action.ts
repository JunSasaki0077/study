"use server";

import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getPostAction() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) throw new Error("Unauthorized");

  const posts = await prisma.post.findMany({
    include: {
      comments: {
        include: {
          user: true,
        },
      },
      likesList: { where: { userId: user.id } },
    },
  });
  return posts;
}

export async function deletePostAction(postId: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (post?.userId !== user?.id)
    throw new Error("管理者のみ記事を削除できます。");

  await prisma.post.delete({ where: { id: postId } });

  return { success: true };
}
