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
      <div className="mx-7 mt-8 flex flex-wrap justify-center gap-8 overflow-hidden rounded-2xl bg-bgCard py-7">
        <motion.div
          className="flex"
          initial={{ translateX: "0%" }}
          animate={{ translateX: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <ul className="flex gap-8">
            {brandsLogo.concat(brandsLogo).map((brand) => (
              <li
                key={`${brand.name}`}
                className="flex flex-shrink-0 list-none items-center gap-3 md:gap-8"
              >
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  className="size-6 md:size-10"
                />
                <span className="text-xl font-semibold text-lightGray md:text-2xl">
                  {brand.name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
