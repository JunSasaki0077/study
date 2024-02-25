import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  type LogoListType = {
    id: string;
    url: string;
    img: string;
  };

  const [count, setCount] = useState(0);
  const [logoList, setLogoList] = useState<LogoListType[]>([
    { id: "vite", url: "https://vitejs.dev", img: "/vite.svg" },
    { id: "react", url: "https://react.dev", img: "/react.svg" },
  ]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="mb-[38px]">
          <ul className="flex gap-[30px]">
            {logoList.map((logo) => (
              <li key={logo.id}>
                <a href={logo.url} target="_blank" draggable="false">
                  <motion.img
                    src={logo.img}
                    alt={`${logo.id} logo`}
                    className="w-[80px] h-[80px]"
                    animate={
                      logo.id == "react"
                        ? { rotate: [0, 360], scale: [1, 1.5, 1] }
                        : {}
                    }
                    transition={
                      logo.id == "react"
                        ? {
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            times: [0, 0.75, 1],
                          }
                        : {}
                    }
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-[50px] mb-[30px] font-bold flex gap-2">
          Vite + React
        </h1>
        <div className="card text-center mb-[5px]">
          <div className="relative w-max mx-auto">
            <button className="border border-black py-1 px-3 rounded mb-[30px]">
              count is {count}
            </button>
            <p className="absolute top-[-10px] right-[-30px] text-[20px] text-red-500">
              +1
            </p>
          </div>
        </div>
        <p className="text-[14px]">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div className="container mx-auto border-t border-black">
        <section className="py-[100px] border-black flex items-center gap-[50px] flex-col">
          <div>
            <img src="/install-command.png" alt="" className="w-[700px]" />
          </div>
          <div>
            <img src="/project-name.png" alt="" className="w-[700px]" />
          </div>
          <div>
            <img src="/choose-fw.png" alt="" className="w-[700px]" />
          </div>
          <div>
            <img src="/choose-lang.png" alt="" className="w-[700px]" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
