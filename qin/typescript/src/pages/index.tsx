import { NextPage } from "next";

type Animals = "dog" | "cat";

type Foo = {
  [key in Animals]: number;
};

const foo: Foo = {
  dog: 2,
  cat: 2,
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
