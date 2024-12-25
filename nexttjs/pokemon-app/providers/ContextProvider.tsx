"use client";

import { GlobalContextProvider } from "@/context/globalContext";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
};
export default ContextProvider;
