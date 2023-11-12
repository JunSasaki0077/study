import { PartialDeep } from "type-fest";

//第一型引数と第二型引数の中で互換性があるものを抽出する
type Foo = Extract<"hello" | 0, boolean>;

//第一型引数と第二型引数の中で互換性がないものを抽出する
type Bar = Exclude<"string" | 0, string>;

// nullとundefinedを除いた方を抽出する
type nonNullable = NonNullable<string | null | undefined | number>;

// オブジェクトの型定義によく使われる
type record = Record<"as" | "asd", 1 | 22>;

const obj: record = {
  as: 1,
  asd: 22,
};

// 関数の引数の型をTupleとして取得する
function foo(a: string, b: number, c: boolean) {
  return;
}

type parameters = Parameters<typeof foo>;

// ストリングリテラルタイプを操作するUtility Types
type uppercase = Uppercase<"hello">;

type lowercase = Lowercase<"HELLO">;

type captiralise = Capitalize<"heelo">;

//外部パッケージ type-fest

type User = {
  name: string;
  age: number | null;
  address: {
    country: "UK" | "JA" | "US";
  };
};

type PartialUser = PartialDeep<User>;

const user: PartialUser = {
  name: "じゅん",
  address: {},
};

// // 読み取り専用の型指定
// type ReadonlyUser = Readonly<User>;

// // 指定した型をオプショナルにする。
// type PartialUser = Partial<User>;

// // 指定した方を全て必須にしたい
// type RequiredUser = Required<User>;

// //オブジェクトがあったときに必要なプロパティを指定して新しいオブジェクトを返す
// type PickUser = Pick<User, "name" | "country">;

// //いらないプロパティを指定して新しいオブジェクトを指定する
// type OmitUser = Omit<User, "age">;
