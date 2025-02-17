"use client";
import { Animated } from "@/app/reusable-components/Motion";
import Image from "next/image";
import { motion } from "motion/react";

export default function HowItHappened() {
  const topImageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col lg:gap-20 gap-10">
      <h1 className="section-title text-c-white">How It happened</h1>
      <Animated
        variants={topImageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          width={0}
          height={0}
          alt={"how-it-happened-image-1"}
          src={"/images/works/pend-funds/how-it-happened-1.webp"}
          className="w-full c-container"
          unoptimized
        />
      </Animated>
      <div className="grid grid-cols-2 w-full md:gap-6.5 gap-3 c-container">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            width={0}
            height={0}
            alt={"how-it-happened-image-2"}
            src={"/images/works/pend-funds/how-it-happened-2.webp"}
            className="w-full"
            unoptimized
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            width={0}
            height={0}
            alt={"how-it-happened-image-3"}
            src={"/images/works/pend-funds/how-it-happened-3.webp"}
            className="w-full"
            unoptimized
          />
        </motion.div>
      </div>
      {[...Array(3)].map((_, idx) => (
        <Animated
          variants={topImageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          key={idx}
        >
          <Image
            width={0}
            height={0}
            alt={`how-it-happened-image-${idx + 4}`}
            src={`/images/works/pend-funds/how-it-happened-${idx + 4}.webp`}
            className="w-full c-container"
            unoptimized
          />
        </Animated>
      ))}
    </div>
  );
}
