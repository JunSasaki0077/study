import { motion } from "framer-motion";
import "./App.css";

function App() {
  const variants = {
    animate: {
      x: [-100, 200, -500],
      transition: {
        duration: 2,
        times: [0, 0.75, 1],
        repeat: 2,
        repeatDelay: 2,
      },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <motion.div
          variants={variants}
          animate="animate"
          className="w-[170px] h-[170px] rounded-full bg-sky-500"
        ></motion.div>
      </div>
    </>
  );
}

export default App;
