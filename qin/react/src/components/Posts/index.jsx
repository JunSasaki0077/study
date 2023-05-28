import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import useSWR from "swr";

const usePosts = () => {
  {
    const { data, error } = useSWR(
      "https://jsonplaceholder.typicode.com/posts",
      fetcher
    );
    return {
      data,
      error,
      isLoading: !error && !data,
      isEmpty: data && data.length === 0,
    };
  }
};

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  console.log({ data, error });

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データはからです</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
