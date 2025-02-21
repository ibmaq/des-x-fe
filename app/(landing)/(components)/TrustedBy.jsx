"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "motion/react";
import { useRef } from "react";
const logos = ["dably", "pendfunds", "rentto", "snovos"];

function ParallaxLogos({ baseVelocity = 1 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full max-w-[calc(100vw-16px)] overflow-hidden">
      <div className="w-full flex py-10">
        <motion.div className=" flex gap-6" style={{ x }}>
          {[...Array(4)].map((_, repeatIdx) =>
            logos.map((logo, idx) => (
              <div
                className="max-sm:h-22 px-5 py-3 w-screen max-w-[285px] c-md:max-w-[438px] 2xl:max-w-[522px] object-contain flex justify-center items-center border border-gray-700 relative"
                key={`${repeatIdx}-${idx}`}
              >
                {[...Array(4)].map((_, cornerIdx) => (
                  <div
                    key={cornerIdx}
                    className={`corner-icon ${
                      cornerIdx === 0
                        ? "top-left"
                        : cornerIdx === 1
                        ? "top-right"
                        : cornerIdx === 2
                        ? "bottom-left"
                        : "bottom-right"
                    } ${idx % 2 === 0 ? "" : "rotate-45"}`}
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/images/star.png"
                      alt={`star-${logo}-${cornerIdx}`}
                      unoptimized
                    />
                  </div>
                ))}
                <Image
                  width={100}
                  height={0}
                  src={`/images/works/logos-small/${logo}.png`}
                  alt={`logo-for-${logo}`}
                  className="grayscale max-sm:w-12.5"
                  unoptimized
                />
              </div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}

export const TrustedBy = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="section-title">Trusted by several Funded Startups</h2>
        <ParallaxLogos />
      </div>
    </>
  );
};
