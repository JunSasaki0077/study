"use server";
import { revalidatePath } from "next/cache";
import prisma from "./utils/db";
import { authOptions } from "./utils/auth";
import { getServerSession } from "next-auth";

export async function addTowatchlist(formData: FormData) {
  "use server";
  const movieId = formData.get("movieId");
  const pathName = formData.get("pathname") as string;
  const session = await getServerSession(authOptions);

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathName);
}

export async function deleteFromWatchList(formData: FormData) {
  "use server";

  const watchListId = formData.get("watchlistId") as string;
  const pathName = formData.get("pathname") as string;

  const data = await prisma.watchList.delete({
    where: {
      id: watchListId,
    },
  });
  revalidatePath(pathName);
}
