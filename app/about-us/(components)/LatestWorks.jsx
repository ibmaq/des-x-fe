"use client";
import Image from "next/image";
import Link from "next/link";
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
import { worksData } from "@/public/utils/data";

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
    <div id="works" className="w-full max-w-[calc(100vw-16px)] overflow-hidden">
      <div className="w-full flex py-10">
        <motion.div className="scroller flex gap-4" style={{ x }}>
          {[...Array(4)].map((_, repeatIdx) =>
            worksData.map((work, workIndex) => (
              <a
                className="w-[194px] c-md:w-[388px]"
                key={`${repeatIdx}-${workIndex}`}
                href={work.link !== "coming-soon" ? work.link : "#"}
                // scroll={work.link !== "coming-soon" ? true : false}
                
              >
                <motion.div
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="border border-c-white/30 rounded-md overflow-hidden">
                    <Image
                      src={work.img}
                      alt={work.title}
                      width={388}
                      height={443}
                      className="w-[194px] c-md:w-[388px] h-[240px] c-md:h-[443px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col uppercase">
                    <p className="font-extrabold text-xl lg:text-2xl/1.2 text-white">
                      {work.title}
                    </p>
                    <div className="flex gap-2 text-base lg:text-4.8/none text-gray-400 -tracking-0.19">
                      {work.services.map((service, serviceIndex) => (
                        <p key={serviceIndex}>{service}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}

export const LatestWorks = () => {
  return (
    <div className="flex gap-4 pt-5 pb-30">
      <ParallaxLogos />
    </div>
  );
};
