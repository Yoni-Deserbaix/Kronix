import { motion, useInView } from "framer-motion";
import React from "react";

type FadeRightType = {
  children: React.ReactNode;
  delay?: number;
};

const FadeRight = ({ children, delay = 0 }: FadeRightType) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const variants = {
    hidden: { opacity: 0, x: 50 },
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

export default FadeRight;
