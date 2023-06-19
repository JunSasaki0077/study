import { useCommentsByPostId } from "@/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
    <ul className="space-y-2">
      {data.map((comment) => (
        <li key={comment.id} className="border-b pb-2">
          <Link href={`/comments/${comment.id}`}>
            <p className="hover:text-blue-500">{comment.body}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
