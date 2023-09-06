import { circle, container, hstack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div>
      <header
        className={container({
          py: "4",
        })}
      >
        <div className={hstack({ justify: "space-between" })}>
          <h1>dpop</h1>
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
      </header>
    </div>
  );
}
