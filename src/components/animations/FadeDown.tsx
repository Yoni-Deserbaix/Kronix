import { motion } from "framer-motion";

type FadeDownType = {
  children: React.ReactNode;
  delay?: number;
};

const FadeDown = ({ children, delay = 0 }: FadeDownType) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeDown;
