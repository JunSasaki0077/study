type Props = {
  id: string;
  name: string;
  age: number;
};

type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type StringKeys = Filter<Props, string>;
type NumberKeys = Filter<Props, number>;
type BooleanKeys = Filter<Props, boolean>;

const foo = (id: string, age: number) => {
  return 1;
};

type Return<T> = T extends (...args: [any, infer U, ...any[]]) => any
  ? U
  : never;

type Foo = Return<typeof foo>;
