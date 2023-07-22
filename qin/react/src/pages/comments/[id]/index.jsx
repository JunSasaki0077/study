import { Comment } from "@/components/Comment";
import { Header } from "@/components/header";
import { API_URL } from "@/utils/const";
import React from "react";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comment = await fetch(`${API_URL}/comments?_limit=10`);
  const commentData = await comment.json();

  const paths = commentData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 1,
  };
};

const CommentId = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentId;
