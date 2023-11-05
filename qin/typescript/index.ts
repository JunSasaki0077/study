type User<T> = {
  name: string;
  state: T;
};

type Japanese = User<"東京都" | "大阪府">;
type American = User<"CA" | "NY">;

const user1: Japanese = {
  name: "田中",
  state: "東京都",
};

const user2: American = {
  name: "Johnny",
  state: "CA",
};

//ジェネリクスの初期値

export type Foo<T = string> = {
  value: T;
};

const foo1: Foo = {
  value: "",
};

const foo2: Foo<number> = {
  value: 111,
};

export type Bar<T extends string | number = string> = {
  value: T;
};

const bar1: Bar = {
  value: "bat",
};

const bar2: Bar<number> = {
  value: 123,
};
