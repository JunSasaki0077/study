import { useComment } from "@/hooks/useComment";
import Head from "next/head";

export const Comment = () => {
  const { comment, user, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment.title}</title>
      </Head>
      <h1>{comment.title}</h1>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
      <div>{user.name}</div>
    </div>
  );
};
