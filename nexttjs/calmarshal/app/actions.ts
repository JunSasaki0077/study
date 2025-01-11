"use server";

import prisma from "./lib/db";
import { requireUser } from "./lib/hooks";

const OnboardingAction = async (formData: FormData) => {
  const session = await requireUser();

  const data = await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      userName: "adfasfd",
      name: "adfadsf",
    },
  });
};
export default actions;
