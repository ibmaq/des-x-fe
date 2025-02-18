"use client";
import { Animated } from "@/app/reusable-components/Motion";
import Image from "next/image";
import { motion } from "motion/react";

export default function UserPersonas() {
  const topImageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col lg:gap-20 gap-10">
      <h1 className="section-title text-c-white">USER PERSONAS</h1>

      <div className="grid grid-cols-2 w-full md:gap-6.5 gap-3 c-container overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            width={0}
            height={0}
            alt={"user-personas-image-1"}
            src={"/images/works/pend-funds/user-personas-1.webp"}
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
            alt={"user-personas-image-2"}
            src={"/images/works/pend-funds/user-personas-2.webp"}
            className="w-full"
            unoptimized
          />
        </motion.div>
      </div>
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
          alt={"user-personas-image-3"}
          src={"/images/works/pend-funds/user-personas-3.webp"}
          className="w-full c-container"
          unoptimized
        />
      </Animated>
    </div>
  );
}
