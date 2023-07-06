import Link from "next/link";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>React状態管理</a>
        </Link>

        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>

      <h2>TODO:2件</h2>
    </header>
  );
};
