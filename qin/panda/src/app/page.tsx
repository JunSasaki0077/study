import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { circle, container, hstack } from "../../styled-system/patterns";

const buttonStyle = cva({
  base: {
    display: "flex",
  },
  defaultVariants: {
    size: "sm",
    visual: "solid",
  },
  variants: {
    size: {
      lg: { fontSize: "24px", padding: "8" },
      sm: { fontSize: "12px", padding: "4" },
    },
    visual: {
      outline: { borderColor: "red.200", borderWidth: "1pxv " },
      solid: { bg: "red.400", color: "white" },
    },
  },
});

const Button = styled("button", buttonStyle);

export default function Home() {
  return (
    <div>
      <styled.header className={container()} py="4">
        <div className={hstack({ justify: "space-between" })}>
          <styled.h1 fontWeight="bold" fontSize="2xl" _hover={{ bg: "red.400" }}>
            dpop
          </styled.h1>
          <div
            className={circle({
              overflow: "hidden",
              size: "10",
            })}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_So9gqwUmYFH9tiq7kN7R0cZK4EUcehfv9CfPHLcu5A&s"
              alt=""
            />
          </div>
        </div>
      </styled.header>
      <Button size="lg" visual="outline"></Button>
    </div>
  );
}
