import { motion, Variants } from "framer-motion";
import Button from "../components/Button";
import "../index.css";

const starVariants: Variants = {
  floating1: {
    x: [0, 50],
    y: [0, -100],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  floating2: {
    x: [-100, 0],
    y: [0, -150],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  floating3: {
    x: [100, 0],
    y: [-10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  flicker: {
    opacity: [0.1, 1, 0.1],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <div className="relative mt-20">
      <div className="z-10 flex flex-col items-center justify-center text-center text-white">
        <h1 className="z-10 text-5xl font-bold md:text-8xl md:leading-[7rem]">
          Bringing Your <br />
          Dream Into <span className="font-jarkarta text-primary">Reality</span>
        </h1>
        <p className="mt-8 w-3/4 font-[250] opacity-80 md:mt-12 md:max-w-[500px]">
          We increase revenue and ensure sustainable long-term growth for your
          business through powerful Webflow websites.
        </p>
        <Button text="Book A Meeting" className="mt-10 h-[56px] w-[149px]" />

        {/* Glow effect background */}
        <div className="glow absolute opacity-35"></div>

        {/* Stars background */}
        <div>
          {/* Right Star */}
          <motion.div
            className="absolute -top-10 right-28 -translate-x-1/2 -translate-y-1/2 transform md:right-[5%] md:top-[30%]"
            variants={starVariants}
            animate={{ ...starVariants.floating1, ...starVariants.flicker }}
          >
            <img src="/assets/Star.svg" alt="Star" className="md:size-28" />
          </motion.div>
          {/* Left Star */}
          <motion.div
            className="md:top-9/12 absolute bottom-0 left-10 -translate-x-1/2 -translate-y-1/2 transform md:left-72"
            variants={starVariants}
            animate={{ ...starVariants.floating2, ...starVariants.flicker }}
          >
            <img src="/assets/Star.svg" alt="Star" className="size-4" />
          </motion.div>
          {/* Bottom Star */}
          <motion.div
            className="md:top-11/12 absolute right-28 top-[110%] -translate-x-1/2 -translate-y-1/2 transform md:right-1/3"
            variants={starVariants}
            animate={{ ...starVariants.floating3, ...starVariants.flicker }}
          >
            <img src="/assets/Star.svg" alt="Star" className="size-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
