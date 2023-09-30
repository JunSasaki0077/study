import { atom } from "jotai";
import { Todo } from "src/types";
import { selectAtom } from "jotai/utils";

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

export const todosLengthAtom = selectAtom(todosAtom, (todos) => todos.length);

export const toggleTodoAtom = atom(
  (get) => get(todosAtom),
  (get, set, update: Pick<Todo, "id">) => {
    const prevTodos = get(todosAtom);
    const newTodos = prevTodos.map((todo) => {
      if (todo.id === update.id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    set(todosAtom, newTodos);
  }
);

export const addTodoAtom = atom(
  null,
  (get, set, update: Pick<Todo, "text">) => {
    const prevTodos = get(todosAtom);
    const newTodo = {
      id: prevTodos.length + 1,
      text: update.text,
      isDone: false,
    };
    const newTodos = [...prevTodos, newTodo];
    set(todosAtom, newTodos);
  }
);
