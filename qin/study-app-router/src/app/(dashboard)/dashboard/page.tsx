import React from "react";

export default async function Dashboards() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();

  throw new Error();
  return (
    <main>
      <div>ダッシュボード</div>
      <div>{json.title}</div>
    </main>
  );
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
