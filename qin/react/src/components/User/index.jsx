import { useUser } from "@/hooks/useUser";
import Head from "next/head";
import { PostsByUserId } from "../Posts/PostsByUserId";

const User = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.name}</title>
      </Head>
      <h1>{data.name}</h1>
      <h2>詳細</h2>
      <p>{data.email}</p>
      <p>{data.address.street}</p>
      <p>{data.address.suite}</p>
      <h2>投稿</h2>
      <PostsByUserId id={data.id} />
      <h2>コメント</h2>
    </div>
  );
};

export default User;
