import { NextPage } from "next";

type Foo = number;

type Bar = string;

type FooBar = Foo | Bar;

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
