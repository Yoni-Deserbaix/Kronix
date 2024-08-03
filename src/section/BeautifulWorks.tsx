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
        <div className="grid h-[800px] grid-cols-2 gap-5 overflow-y-hidden md:h-[1000px] md:grid-cols-4">
          {worksImages.map((image, index) => (
            <motion.div
              initial={{ translateY: 0 }}
              animate={{
                translateY: index % 2 === 0 ? "-50%" : "50%",
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              key={index}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[300px] w-full object-cover shadow-lg"
              />
            </motion.div>
          ))}
          {worksImages.map((image, index) => (
            <motion.div
              initial={{ translateY: 0 }}
              animate={{
                translateY: index % 2 === 0 ? "-50%" : "50%",
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              key={index}
              className="gap-5"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-[300px] w-full object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
