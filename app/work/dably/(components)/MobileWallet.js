"use client";

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
import { Animated } from "@/app/reusable-components/Motion";
import Image from "next/image";

export default function MobileWallet() {
  const baseVelocity = 3;
  const baseX = useMotionValue(0);
  const baseXReverse = useMotionValue(0); // For the second motion.div
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const reverseVelocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, -5],
    {
      clamp: false,
    }
  );

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const xReverse = useTransform(baseXReverse, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const directionFactorReverse = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);

    // For reverse direction
    let moveByReverse =
      directionFactorReverse.current * baseVelocity * (delta / 1000);
    if (reverseVelocityFactor.get() < 0) {
      directionFactorReverse.current = -1;
    } else if (reverseVelocityFactor.get() > 0) {
      directionFactorReverse.current = 1;
    }
    moveByReverse +=
      directionFactorReverse.current *
      moveByReverse *
      reverseVelocityFactor.get();
    baseXReverse.set(baseXReverse.get() + moveByReverse);
  });
  const topImageVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Animated
        variants={topImageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={"/images/works/dably/mobile-ring-interface.webp"}
          width={0}
          height={0}
          className="w-full c-container"
          alt="user-interface-ring"
          unoptimized
        />
      </Animated>
      <div className="flex flex-col lg:gap-15 md:gap-12 gap-8">
        <h1 className="section-title text-c-white">Mobile Wallet</h1>

        <div className="w-full overflow-hidden relative">
          <motion.div className="flex gap-2.5 w-full" style={{ x }}>
            {Array(12)
              .fill()
              .map((_, outerIdx) =>
                Array(12)
                  .fill()
                  .map((_, innerIdx) => (
                    <Image
                      key={innerIdx}
                      width={296}
                      height={0}
                      src={`/images/works/dably/mobile-wallet/${
                        innerIdx + 1
                      }.webp`}
                      alt={`mobile-wallet-${innerIdx + 1} marquee__item`}
                      className="max-md:w-36 md:max-lg:w-56"
                      unoptimized
                    />
                  ))
              )}
          </motion.div>
          <div className="absolute bg-custom-gradient h-full w-61 left-0 top-0 rotate-180 max-lg:hidden" />
          <div className="absolute bg-custom-gradient h-full w-61 right-0 top-0 max-lg:hidden" />
        </div>
      </div>
    </>
  );
}
