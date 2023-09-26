import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todosLengthState, todosState } from "src/state/todo";

export const TodoCounter: FC = () => {
  const todosLength = useRecoilValue(todosLengthState);
  return <h2>TODO: {todosLength}件</h2>;
};
