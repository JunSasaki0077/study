import useSWR from "swr";

export const usePost = (id) => {
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
  );

  return {
    data,
    error,

    isLoading: !data && !error,
  };
};
