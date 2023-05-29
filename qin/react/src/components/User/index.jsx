import { useUser } from "@/hooks/useUser";
import Head from "next/head";

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
      <p>{data.email}</p>
      <p>{data.address.street}</p>
      <p>{data.address.suite}</p>
    </div>
  );
};

export default User;
