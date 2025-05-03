import "./App.css";
import { animate, delay, motion, useScroll } from "framer-motion";

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

  const svgIconVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)",
    },
  }
  const { scrollYProgress: completionProgress } = useScroll();

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
                bounceDamping: 10,
                bounceStiffness: 600,
              }}
              className="bg-emerald-400 w-1/2 py-4 rounded-lg text-white font-light tracking-wide"
            >
              Subscribe
            </motion.button>
          </motion.div>
          {/* Dragable */}
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          >
            <motion.div
              className="bg-orange-500 w-20 h-20 rounded-2xl"
              drag
              dragConstraints={{
                top: -125,
                left: 20,
                right: 125,
                bottom: 125,
              }}
              dragTransition={{
                bounceDamping: 10,
                bounceStiffness: 600,
              }}
            ></motion.div>
          </motion.div>
          {/* Scrollbar */}
          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          >
            <motion.div className="bg-gray-50/20 aspect-square w-40 rounded-2xl">
              <motion.div
                className="bg-slate-300 w-full h-full origin-bottom rounded-2xl"
                transition={{
                  duration: 4,
                  ease: "easeIn",
                }}
                style={{ scaleY: completionProgress }}
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={gridDivVariant}
            className="flex items-center justify-center rounded-lg aspect-square bg-slate-800 gap-10"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="stroke-amber-500 w-1/2 stroke-[0.5]"
            >
              <motion.path
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                variants={svgIconVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default:{
                    duration:2,
                    ease:"easeInOut",
                    delay:1,
                    repeat:Infinity,
                    repeatType:"reverse",
                    repeatDelay:1
                  },
                  fill: {
                    duration: 2,
                    ease: "easeIn",
                    delay: 2,
                    repeat: Infinity,
                    repeatType:"reverse",
                    repeatDelay:1
                  },
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}

export default App;
