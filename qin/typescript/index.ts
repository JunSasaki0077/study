type User = {
  name: string;
  age: number | null;
  country?: "UK" | "JA" | "US";
};

// 読み取り専用の型指定
type ReadonlyUser = Readonly<User>;

// 指定した型をオプショナルにする。
type PartialUser = Partial<User>;

// 指定した方を全て必須にしたい
type RequiredUser = Required<User>;

//オブジェクトがあったときに必要なプロパティを指定して新しいオブジェクトを返す
type PickUser = Pick<User, "name" | "country">;

//いらないプロパティを指定して新しいオブジェクトを指定する
type OmitUser = Omit<User, "age">;

const user: OmitUser = {
  name: "じゅん",
  country: "JA",
};
