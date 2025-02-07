"use client";

import { motion, useSpring, useTransform, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function AnimatedNumber({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  let spring = useSpring(0, { mass: 0.5, stiffness: 5, damping: 5 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value]);

  return (
    <div className="flex" ref={ref}>
      {prefix && (
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {prefix}
        </motion.span>
      )}
      <motion.span>{display}</motion.span>
      {suffix && (
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {suffix}
        </motion.span>
      )}
    </div>
  );
}
