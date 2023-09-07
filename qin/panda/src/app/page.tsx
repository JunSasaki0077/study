import { styled } from "../../styled-system/jsx";
import { circle, container, hstack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div>
      <styled.header className={container()} py="4">
        <div className={hstack({ justify: "space-between" })}>
          <styled.h1 fontWeight="bold" fontSize="2xl" _hover={{bg:red.400}}>
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
    </div>
  );
}
