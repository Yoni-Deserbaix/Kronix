import { motion, useInView } from "framer-motion";
import React from "react";

type ScaleOnScrollType = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
};

export default function ScaleOnScroll({
  children,
  delay = 0,
  duration = 0.5,
}: ScaleOnScrollType) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
