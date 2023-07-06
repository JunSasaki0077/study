import type { NextPage } from "next";
import Link from "next/link";
import { Header } from "src/components/Header";

const TODOS = [
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
];

const Home: NextPage = () => {
  return (
    <div>
      <h3>TODO一覧</h3>
      {TODOS.map((todo) => (
        <div key={todo.id}>
          <label style={{ fontSize: "2rem" }}>
            <input
              type="checkbox"
              style={{ width: "1.5rem", height: "1.5rem" }}
              checked={todo.isDone}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
