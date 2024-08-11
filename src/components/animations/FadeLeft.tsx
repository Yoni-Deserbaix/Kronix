import { motion } from "framer-motion";

type FadeLeftType = {
  children: React.ReactNode;
  delay?: number;
};

const FadeLeft = ({ children, delay = 0 }: FadeLeftType) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeLeft;
