"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SplashScreen({ onComplete, children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-c-black-2 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Circle */}
      <motion.div
        className="absolute border-2 border-primary rounded-full z-2"
        style={{ width: 200, height: 200 }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Expanding Line */}
      <motion.div
        className="absolute bg-primary h-0.5 z-2"
        initial={{ width: 0 }}
        whileInView={{ width: "100vw" }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
      />

      {/* Splitting Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-1"
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-full bg-black z-1"
        initial={{ y: 0 }}
        animate={{ y: "50%" }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
      />

      {/* Render children inside splash screen */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
