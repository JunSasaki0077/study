import { useCommentsByPostsId } from "@/hooks/useFetchArray";
import { usePost } from "@/hooks/usePost";
import Head from "next/head";
import { CommentsByPostId } from "../Comments/CommentsByPostId";
import { UserByPostId, UserByUserId } from "../User/UserByUserId";

const Post = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <dir>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data.userId} />
      {/* {user?.name ? <div>Created by{user.name}</div> : null} */}
      <CommentsByPostId id={data.id} />
    </dir>
  );
};
export default Post;
