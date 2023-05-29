import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";

import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
