import { fetcher } from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className="text-lg">Created by{data.name}</div>;
};
