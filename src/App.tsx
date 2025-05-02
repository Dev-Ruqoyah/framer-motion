import "./App.css";
import { animate, motion } from "framer-motion";

function App() {
  const gridContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
              className="bg-stone-100 h-20 w-20 rounded-lg"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
              className="bg-stone-100 h-20 w-20 rounded-full"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          >
            <motion.div
              className="bg-rose-400 h-16 w-16"
              animate={{
                scale: [1, 2, 2, 1],
                borderRadius: ["10%", "10%", "50%", "10%"],
                rotate: [0, 90, 90, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            ></motion.div>
          </motion.div>

          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d1d5db",
                color: "black",
              }}
              transition={{
                bounceDamping:10,bounceStiffness:600
              }}
              className="bg-emerald-400 w-1/2 py-4 rounded-lg text-white font-light tracking-wide"
            >
              Subscribe
            </motion.button>
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
        </motion.section>
      </div>
    </>
  );
}

export default App;
