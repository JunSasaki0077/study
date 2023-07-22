import { useComments } from "@/hooks/useFetchArray";
import { API_URL } from "@/utils/const";
import Link from "next/link";

export const getServerSideProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

export const Comments = (props) => {
  const { fallbback } = props;

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
    <ul className="space-y-2">
      {data.map((comment) => (
        <li key={comment.id} className="border-b pb-2">
          <Link href={`/comments/${comment.id}`} prefetch={false}>
            <p className="hover:text-blue-500">{comment.body}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
