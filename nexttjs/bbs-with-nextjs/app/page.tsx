import { PrismaClient } from "@prisma/client";
import BBSCardList from "./components/BBSCardList";
import prisma from "../lib/prismaClient";

const prisma = new PrismaClient();

export default function Home() {
  return (
    <main>
      <BBSCardList />
    </main>
  );
}
