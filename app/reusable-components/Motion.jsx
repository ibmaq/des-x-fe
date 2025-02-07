"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Animated = ({
  children,
  animationVariantsDesktop = {},
  animationVariantsMobile = {},
  animationVariant = "",
  ...restProps
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={
        animationVariant
          ? isMobile
            ? animationVariantsMobile[animationVariant]
            : animationVariantsDesktop[animationVariant]
          : {}
      }
      {...restProps}
    >
      {children}
    </motion.div>
  );
};
