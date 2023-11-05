type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "ja";
};
const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === "en";
};

export const foo = (value: any) => {
  if (isUserA(value)) {
    return value;
  }
  if (isUserB(value)) {
    return value;
  }
  return value;
};

//非同期の型定義
export const bar = async () => {
  const res = await fetch("");
  const json = await res.json();
  if (isUserA(json)) {
    return json.lang;
  }
};

//filter関数の型定義
const users: (UserA | UserB)[] = [
  { name: "たなか", lang: "ja" },
  { name: "やまだ", lang: "ja" },
  { name: "ジョニー", lang: "en" },
];

const japanese = users.filter(isUserA);
