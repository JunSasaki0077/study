import { useCallback, useEffect, useState } from "react";
import Error from "next/error";

export const Posts = () => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("えらーが発生したため、データの取得に失敗しました");
      }
      const json = await res.json();
      // setPosts(json);
    } catch (error) {
      // setError(error);
    }
    // setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div>ローディング中です</div>;
  }
  if (state.error) {
    return <div>{error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div>データはからです</div>;
  }

  return (
    <ol>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};
