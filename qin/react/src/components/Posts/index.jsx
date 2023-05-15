import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗しました。");
  }

  const json = await response.json();
  return json;
};

const usePosts = () => {
  {
    const { data, error } = useSWR(
      "https://jsonplaceholder.typicode.com/posts",
      fetcher
    );
    return {
      data,
      error,
      isLoading: !error && !data,
      isEmpty: data && data.length === 0,
    };
  }
};

const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};

export default Posts;
