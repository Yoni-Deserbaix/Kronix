import { motion } from "framer-motion";
import FadeDown from "../components/animations/FadeDown";
import { brandsLogo } from "../data.json";

export default function Brands() {
  return (
    <div className="mt-20">
      <div className="inline-flex w-full items-center justify-center">
        <motion.hr
          initial={{ translateX: "-50%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: 1 }}
          className="my-8 mr-4 h-0.5 w-12 border-0 bg-primary md:mr-8"
        ></motion.hr>
        <h2 className="text-center text-sm font-medium text-white md:text-base">
          <FadeDown delay={0.6}>TRUSTED BY AMAZING BRANDS</FadeDown>
        </h2>
        <motion.hr
          initial={{ translateX: "50%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: 1 }}
          className="my-8 ml-4 h-0.5 w-12 border-0 bg-primary md:ml-8"
        ></motion.hr>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-7 mt-8 flex overflow-hidden rounded-2xl bg-bgCard py-7"
      >
        <motion.div
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-[5.5rem] pr-[5.5rem]"
        >
          <div className="flex gap-[5.5rem]">
            {brandsLogo.concat(brandsLogo).map(({ name, src }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5"
              >
                <img src={src} alt={`${name} logo`} className="size-8" />
                <span className="text-xl font-semibold text-lightGray md:text-2xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
