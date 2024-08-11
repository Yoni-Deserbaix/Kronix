import { motion, useInView } from "framer-motion";
import React from "react";

type FadeLeftType = {
  children: React.ReactNode;
  delay?: number;
};

const FadeLeft = ({ children, delay = 0 }: FadeLeftType) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
