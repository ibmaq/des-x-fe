"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function FounderCard({
  name,
  title,
  role,
  description,
  image,
  isMobile,
  delay = 0,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: isMobile ? 0.5 : 1.0, // 50% for mobile, 100% for desktop
  });

  const baseVariants = isMobile
    ? {
        hidden: { opacity: 0, x: 0, y: -40, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: "easeOut", delay },
        },
      }
    : {
        hidden: { opacity: 0, x: -50, y: -50, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={baseVariants}
      className="flex flex-col gap-5 2xl:gap-10"
    >
      <Image
        src={image}
        alt={name}
        width={644}
        height={577}
        className="rounded-2xl w-full shrink-0 2xl:min-w-[644px] 2xl:h-[577px]"
        unoptimized
      />
      <motion.div className="flex flex-col gap-5">
        <div className="flex flex-col max-2xl:gap-4">
          <div className="flex flex-col 2xl:flex-row justify-between">
            <p className="text-11.5/none 2xl:text-20/none font-bebas text-c-white -tracking-2 2xl:-tracking-3.84">
              {name}
            </p>
            <p className="text-base/none 2xl:text-2xl/none text-c-gray-2 font-medium">
              {title}
            </p>
          </div>
          <p className="text-2xl 2xl:text-8 leading-1.2 text-primary font-medium">
            {role}
          </p>
        </div>
      </motion.div>

      <motion.p className="text-sm/1.4 c-md:text-xl/1.2 text-gray-400 w-full">
        {description}
      </motion.p>
    </motion.div>
  );
}
