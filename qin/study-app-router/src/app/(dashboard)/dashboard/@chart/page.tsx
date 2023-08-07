import React from "react";

export default async function Chart() {
  await sleep(5000);
  return (
    <main>
      <div>チャート</div>
      <div>何かしらのチャートが出る想定</div>
    </main>
  );
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
