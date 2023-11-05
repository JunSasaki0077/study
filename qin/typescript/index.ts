export const PATH = {
  INDEX: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
} as const;

export function getFirstLetter(str: number) {
  return (str as unknown as string).charAt(0);
}
