import { Header } from "@/components/header";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      <h1>Nextjsで学ぶReact講座</h1>
      <p>JSONPlaceholdeのAPIを叩いてみるよ!</p>
    </div>
  );
};

export default Index;
