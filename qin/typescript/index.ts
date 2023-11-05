export type User = {
  name: string;
} & OptionalPersonalData;

type PersonalData = {
  weight?: number;
  height?: number;
  realName?: string;
};

type OptionalPersonalData = {
  [K in keyof PersonalData]?: PersonalData[K];
};

const user: User = {
  name: "じゅん",
};
