import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <motion.div
          whileHover={{ opacity: 0 }}
          className="w-[170px] h-[170px] rounded-full bg-sky-500"
        ></motion.div>
      </div>
    </>
  );
}

export default App;
