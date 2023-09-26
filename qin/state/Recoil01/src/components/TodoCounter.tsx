import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todosLengthState, todosState } from "src/state/todo";

type Props = {
  todoCount: number;
};

export const TodoCounter: FC<Props> = ({ todoCount }) => {
  const todosLength = useRecoilValue(todosLengthState);
  return <h2>TODO: {todosLength}件</h2>;
};
