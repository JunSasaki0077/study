import { useAtom } from "jotai";
import type { NextPage } from "next";
import { todosAtom, toggleTodoAtom } from "src/state/todo";
import { Todo } from "src/types";

const Home: NextPage = () => {
  const [todos, toggleTodo] = useAtom(toggleTodoAtom);

  return (
    <div>
      <h3>TODO一覧</h3>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              style={{ width: "1.5rem", height: "1.5rem" }}
              checked={todo.isDone}
              onChange={() => toggleTodo({ id: todo.id })}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
