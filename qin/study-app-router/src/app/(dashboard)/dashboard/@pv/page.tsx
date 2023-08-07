import React from "react";

export default async function Pv() {
  await sleep(3000);
  return (
    <main>
      <div>PV数</div>
      <div>1000</div>
    </main>
  );
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
