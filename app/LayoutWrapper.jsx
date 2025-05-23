"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "./reusable-components/Navbar";
import { Footer } from "./reusable-components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import HotjarTracker from "./reusable-components/HotjarScript";

export default function LayoutWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showLine, setShowLine] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      autoRaf: true,
    });

    const handleRouteChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          lenis.scrollTo(targetElement, { duration: 1.5 });
        }
      } else {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    handleRouteChange();

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return (
    <>
      <div className="relative w-full h-full">
        <div className="relative z-0">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Splash Screen */}
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Animated Circle */}
            <motion.div
              className="absolute border-2 border-primary rounded-full z-2"
              style={{ width: 200, height: 200 }}
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Expanding Line */}
            {showLine && (
              <motion.div
                className="absolute bg-primary h-0.5 z-2"
                initial={{ width: 0 }}
                animate={{ width: "100vw" }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
                onAnimationComplete={() => setShowLine(false)}
              />
            )}

            {/* Splitting Background */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-c-black-2 z-1"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-full bg-c-black-2 z-1"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </div>
      <HotjarTracker />
    </>
  );
}
