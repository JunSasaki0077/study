import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostsId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?/postId=${id}` : null);
};
