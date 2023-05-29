import { Header } from "@/components/header";
import Head from "next/head";
import React from "react";

import { Comments as CommentsComponent } from "@/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
