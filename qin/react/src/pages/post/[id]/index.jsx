import Post from "@/components/Post";
import { usePost } from "@/hooks/usePost";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const PostId = () => {
  return (
    <div>
      <header>header</header>
      <Post />
    </div>
  );
};

export default PostId;
