import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();

  const { data: comment, error: commentError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const { data: user, error: userError } = useSWR(
    comment?.userId
      ? `https://jsonplaceholder.typicode.com/users/${comment.userId}`
      : null,
    fetcher
  );

  return {
    comment,
    user,
    error: commentError || userError,
    isLoading: !user && !userError,
  };
};
