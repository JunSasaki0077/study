import type { NextPage } from "next";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { Todo } from "src/types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Add: NextPage<Props> = ({ setTodos }) => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text, isDone: false };
      return [...prevTodos, newTodo];
    });
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
