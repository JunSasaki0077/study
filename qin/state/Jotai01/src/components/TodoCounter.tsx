import { useAtom } from "jotai";
import { FC } from "react";
import { todosAtom } from "src/state/todo";

export const TodoCounter: FC = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  return <h2>TODO: {todos.length}件</h2>;
};
