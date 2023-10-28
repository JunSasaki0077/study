import { NextPage } from "next";

const foo = (bar: "a" | "b") => {
  switch (bar) {
    case "a":
      return;
    case "b":
      return;
    default:
      bar;
      break;
  }
};

export const Home: NextPage = () => {
  return <div>test</div>;
};
