import Link from "next/link";
import React, { FC, useContext } from "react";
import { TodoCounter } from "./TodoCounter";
import { LangContext, ThemeContext } from "src/pages/_app";
import { log } from "console";

type Props = {
  todoCount: number;
};

export const Header: FC<Props> = ({ todoCount }) => {
  // const theme = useContext(ThemeContext);
  // const lang = useContext(LangContext);

  // console.log({ theme, lang });
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        console.log({ theme });

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
      }}
    </ThemeContext.Consumer>
  );
};
