import { API_URL } from "@/utils/const";
import { useRouter } from "next/router";

import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();

  const { data, error } = useSWRImmutable(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
