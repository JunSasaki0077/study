import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  const bbsId = params.bbsId;
  const BBSDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });
  return NextResponse.json(BBSDetailData);
}
