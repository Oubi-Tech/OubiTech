import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const AnimateSection = memo(({ children, delay = 0 }) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
});

export default AnimateSection;
