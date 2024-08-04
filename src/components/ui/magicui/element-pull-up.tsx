"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface ElementPullUpProps {
  elements: ReactNode[];
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function ElementPullUp({
  elements,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: ElementPullUpProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={wrapperFramerProps}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn(
        "font-display text-center leading-[3rem] tracking-[-0.02em] drop-shadow-sm md:leading-[4rem]",
        className,
      )}
    >
      {elements.map((element, i) => (
        <motion.div
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {element}
        </motion.div>
      ))}
    </motion.div>
  );
}
