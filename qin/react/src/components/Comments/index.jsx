import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import useSWR from "swr";

const useComments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((comment) => (
        <li key={comment.id}>
          <Link href={`/comments/${comment.id}`}>
            <p>{comment.name}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
};
