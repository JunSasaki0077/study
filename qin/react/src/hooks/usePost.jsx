import { API_URL } from "@/utils/const";
import useSWR from "swr";

export const usePost = (id) => {
  const { data, error } = useSWR(id ? `${API_URL}/posts/${id}` : null);

  return {
    data,
    error,

    isLoading: !data && !error,
  };
};
