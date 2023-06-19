import { useComment } from "@/hooks/useComment";
import Head from "next/head";
import PostByCommentId from "../Post/PostByCommentId";

export const Comment = (props) => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.title}</h1>
      <p>{data.email}</p>
      <p>{data.body}</p>

      <h2>元の記事</h2>
      <PostByCommentId id={data.postId} />
    </div>
  );
};
