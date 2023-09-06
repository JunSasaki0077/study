import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <button
      className={css({
        "& span": { color: "red.400" },
        color: { _hover: { _focus: "red" }, base: "blue" },
        fontSize: { base: "3xl", lg: "8xl" },
        fontWeight: { mdToXl: "bold" },
        hideFrom: "md",
      })}
    >
      Hello 🐼!
      <span>hogs</span>
    </button>
  );
}
