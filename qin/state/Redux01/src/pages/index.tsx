import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state";
import { toggleTodo } from "src/state/todos";
import { Todo } from "src/types";

const Home: NextPage = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const toggleIsDone = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
    // setTodos((prevTodos) => {
    //   return prevTodos.map((todo) => {
    //     if (todo.id === id) {
    //       return { ...todo, isDone: !todo.isDone };
    //     }
    //     return todo;
    //   });
    // });
  };
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
              onChange={() => toggleIsDone(todo.id)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
