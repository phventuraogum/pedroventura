import { motion, useReducedMotion } from "framer-motion";

const lines = ["BUILDING AI-NATIVE SYSTEMS", "FROM ARCHITECTURE", "TO PRODUCTION."];

export function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="type-display max-w-[1000px]">
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="block"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {line}
        </motion.span>
      ))}
    </h1>
  );
}
