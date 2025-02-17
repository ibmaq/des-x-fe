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
import Image from "next/image";

export default function Portal() {
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
  return (
    <div className="flex flex-col lg:gap-15 md:gap-12 gap-8">
      <h1 className="section-title text-c-white">Web (User PortaL)</h1>
      <div className="flex flex-col gap-8 relative">
        {/* <section className="enable-animation">
          <div className="marquee">
            <ul className="marquee__content">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/user-portal-${
                    idx + 1
                  }.webp`}
                  alt={`user-portal-${idx + 1} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  width={467}
                  height={0}
                  src={`/images/works/dably/portals/user-portal-${
                    idx + 1
                  }.webp`}
                  alt={`user-portal-${idx + 1} marquee__item`}
                  className="max-md:w-52 md:max-lg:w-80"
                  unoptimized
                />
              ))}
            </ul>
          </div>
        </section> */}
        <div className="w-full overflow-hidden">
          <motion.div className="flex gap-2.5 w-full" style={{ x }}>
            {Array(5)
              .fill()
              .map((_, outerIdx) =>
                Array(5)
                  .fill()
                  .map((_, innerIdx) => (
                    <Image
                      key={innerIdx}
                      width={467}
                      height={0}
                      src={`/images/works/dably/portals/user-portal-${
                        innerIdx + 1
                      }.webp`}
                      alt={`user-portal-${innerIdx + 1} marquee__item`}
                      className="max-md:w-52 md:max-lg:w-80"
                      unoptimized
                    />
                  ))
              )}
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div className="flex gap-2.5 w-full" style={{ x: xReverse }}>
            {Array(5)
              .fill()
              .map((_, outerIdx) =>
                Array(5)
                  .fill()
                  .map((_, innerIdx) => (
                    <Image
                      key={innerIdx}
                      width={467}
                      height={0}
                      src={`/images/works/dably/portals/user-portal-${
                        innerIdx + 6
                      }.webp`}
                      alt={`user-portal-${innerIdx + 6} marquee__item`}
                      className="max-md:w-52 md:max-lg:w-80"
                      unoptimized
                    />
                  ))
              )}
          </motion.div>
        </div>
        <div className="absolute bg-custom-gradient h-full w-61 left-0 top-0 rotate-180 max-lg:hidden" />
        <div className="absolute bg-custom-gradient h-full w-61 right-0 top-0 max-lg:hidden" />
      </div>
      <h1 className="section-title text-c-white">Web (Admin)</h1>
      <div className="flex flex-col gap-8 relative">
        <div className="w-full overflow-hidden">
          <motion.div className="flex gap-2.5 w-full" style={{ x }}>
            {Array(6)
              .fill()
              .map((_, outerIdx) =>
                Array(6)
                  .fill()
                  .map((_, innerIdx) => (
                    <Image
                      key={innerIdx}
                      width={467}
                      height={0}
                      src={`/images/works/dably/portals/admin-${
                        innerIdx + 1
                      }.webp`}
                      alt={`admin-${innerIdx + 1} marquee__item`}
                      className="max-md:w-52 md:max-lg:w-80"
                      unoptimized
                    />
                  ))
              )}
          </motion.div>
        </div>
        <div className="w-full overflow-hidden">
          <motion.div className="flex gap-2.5 w-full" style={{ x: xReverse }}>
            {Array(6)
              .fill()
              .map((_, outerIdx) =>
                Array(6)
                  .fill()
                  .map((_, innerIdx) => (
                    <Image
                      key={innerIdx}
                      width={467}
                      height={0}
                      src={`/images/works/dably/portals/admin-${innerIdx + 7}.webp`}
                      alt={`admin-${innerIdx + 7} marquee__item`}
                      className="max-md:w-52 md:max-lg:w-80"
                      unoptimized
                    />
                  ))
              )}
          </motion.div>
        </div>
        <div className="absolute bg-custom-gradient h-full w-61 left-0 top-0 rotate-180 max-lg:hidden" />
        <div className="absolute bg-custom-gradient h-full w-61 right-0 top-0 max-lg:hidden" />
      </div>
    </div>
  );
}
