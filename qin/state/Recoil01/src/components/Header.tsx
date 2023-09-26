import Link from "next/link";
import React, { FC } from "react";
import { TodoCounter } from "./TodoCounter";

type Props = {
  todoCount: number;
};

export const Header: FC<Props> = ({ todoCount }) => {
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

      <TodoCounter todoCount={todoCount} />
    </header>
  );
};
