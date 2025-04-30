import "./App.css";
import { animate, motion } from "framer-motion";

function App() {
  const gridContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridDivVariant = { hidden: { opacity: 0 }, show: { opacity: 1 } };
  return (
    <>
      <div className="flex flex-col gap-10 overflow-x-hidden">
        <motion.section
          variants={gridContainerVariant}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-10 p-10"
        >
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          >
            <motion.div
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:1}}
            transition={{duration:1, ease:"easeOut",delay:0.2,}}
              className="bg-stone-100 h-20 w-20 rounded-lg"
           
            ></motion.div>
            <motion.div className="bg-stone-100 h-20 w-20 rounded-full"></motion.div>
          </motion.div>
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          ></motion.div>
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          ></motion.div>
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          ></motion.div>
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          ></motion.div>
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          ></motion.div>
        </motion.section>
      </div>
    </>
  );
}

export default App;
