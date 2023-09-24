import type { NextPage } from "next";
import { useEffect } from "react";

import { useStore } from "src/state";

const Home: NextPage = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const fetchUsers = useStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
