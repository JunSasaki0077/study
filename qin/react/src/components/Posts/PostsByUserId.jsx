import { usePostsByUserId } from "@/hooks/useFetchArray";
import Link from "next/link";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
