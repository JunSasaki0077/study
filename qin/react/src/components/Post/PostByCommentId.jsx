import { usePost } from "@/hooks/usePost";
import Link from "next/link";

const PostByCommentId = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data.id}`} className="text-lg hover:text-blue-500">
      {data?.title}
    </Link>
  );
};
export default PostByCommentId;
