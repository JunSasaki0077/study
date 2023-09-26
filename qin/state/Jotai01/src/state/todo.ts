import { atom } from "jotai";
import { Todo } from "src/types";

export const todosAtom = atom<Todo[]>([
  {
    id: 1,
    text: "foo",
    isDone: false,
  },
  {
    id: 2,
    text: "bar",
    isDone: true,
  },
]);
