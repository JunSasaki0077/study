import Signup from "@/components/auth/Signup";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

const SignupPage = async () => {
  const user = await getAuthSession();

  if (user) {
    redirect("/");
  }

  return <Signup />;
};

export default SignupPage;
