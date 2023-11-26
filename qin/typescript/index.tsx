type Hex = `#${string}`;

const red: Hex = "#ff0000";

type AppVersion = `v${number}.${number}.${number}`;
const appVersion: AppVersion = "v1.2.0";

type Rgb = [number, number, number];

type Colors = {
  [color in "red" | "blue" | "green"]: Hex | Rgb;
};

const foo = async () => {
  const res = await fetch("");
  const json = await res.json();
};

const colors = {
  red: "#ff0000",
  blue: "#0000ff",
  green: [0, 255, 0],
  //   yellow: "#ffff00",
} as const satisfies Colors;

colors.green = [1, 2, 3];

colors.green.map((v) => v);

type Path = {
  [key: string]: `/${string}`;
};

const path = {
  index: "/",
  about: "/about",
} as const satisfies Path;
