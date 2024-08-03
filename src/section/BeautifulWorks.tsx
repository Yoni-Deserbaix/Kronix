import { motion } from "framer-motion";
import TitleLight from "../components/TitleLight";
import { worksImages } from "../data.json";

export default function BeautifulWorks() {
  return (
    <div className="pt-[4.9rem]" id="portfolio">
      <TitleLight
        title="Our Beautiful Works"
        description={`We help our clients grow their bottom-line with clear and \n professional websites.`}
      />
      <div className="w-full pt-20">
        <div className="grid h-[1000px] grid-cols-2 gap-5 overflow-hidden md:grid-cols-4">
          {worksImages.concat(worksImages).map((image, index) => (
            <motion.div
              key={index}
              initial={{ translateY: index % 2 === 0 ? "0%" : "-200%" }}
              animate={{ translateY: index % 2 === 0 ? "-200%" : "0%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className={`${index % 2 === 0 ? "-mb-20 mt-20" : ""}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
