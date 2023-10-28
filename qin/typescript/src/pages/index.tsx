import { NextPage } from "next";

//型の引数の第一引数は左側のこと
//第二引数は右側を指定する
let obj3: Record<string, unknown> = {
  a: 1,
  b: "foo",
};
let obj4: { a: number; b: string; foo: string } = {
  a: 1,
  b: "foo",
  foo: "foo",
};

obj3.foo = "bar";

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
