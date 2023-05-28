import { usePost } from "@/hooks/usePost";
import Head from "next/head";

const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <dir>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created by{user.name}</div> : null}
    </dir>
  );
};
export default Post;
