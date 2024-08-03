import { motion } from "framer-motion";
import { brandsLogo } from "../data.json";

export default function Brands() {
  return (
    <div className="mt-20">
      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-8 mr-8 h-0.5 w-12 border-0 bg-primary"></hr>
        <h2 className="text-center font-medium text-white">
          TRUSTED BY AMAZING BRANDS
        </h2>
        <hr className="my-8 ml-8 h-0.5 w-12 border-0 bg-primary"></hr>
      </div>
      <div className="before:content[' '] mx-7 mt-8 flex overflow-hidden rounded-2xl bg-bgCard py-7">
        <motion.div
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-16 pr-16"
        >
          <div className="flex gap-16">
            {brandsLogo.map(({ name, src }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5"
              >
                <img src={src} alt={`${name} logo`} className="h-10 w-10" />
                <span className="text-xl font-semibold text-lightGray md:text-2xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-16">
            {brandsLogo.map(({ name, src }, index) => (
              <div
                key={`${name}-duplicate-${index}`}
                className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5"
              >
                <img src={src} alt={`${name} logo`} className="h-10 w-10" />
                <span className="text-xl font-semibold text-lightGray md:text-2xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
