import { Todo } from "src/types";

export type TodosState = {
  todos: Todo[];
  addTodo: (text: Todo["text"]) => void;
  toggleTodo: (id: Todo["id"]) => void;
};

export type UsersState = {
  users: any[];
  fetchUsers: () => Promise<void>;
};

export type State = TodosState & UsersState;
