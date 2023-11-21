import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState();
  useEffect(() => {
    if (state) return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Component {...pageProps} />;
}
