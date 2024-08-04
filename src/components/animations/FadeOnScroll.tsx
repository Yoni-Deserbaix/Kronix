"use client";
import { motion, useInView } from "framer-motion";
import React from "react";

type FadeOnScrollType = {
  children: React.ReactNode;
  delay?: number;
};

const FadeOnScroll = ({ children, delay = 0 }: FadeOnScrollType) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeOnScroll;
