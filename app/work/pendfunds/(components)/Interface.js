"use client";
import { Animated } from "@/app/reusable-components/Motion";
import Image from "next/image";
import { motion } from "motion/react";
export default function Interface() {
  const topImageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col lg:gap-20 gap-10">
      <h1 className="section-title text-c-white">User INTERFACE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-6.5 gap-3 c-container overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            width={0}
            height={0}
            alt="user-interface-image-1"
            src="/images/works/pend-funds/user-interface-1.webp"
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
            alt="user-interface-image-2"
            src="/images/works/pend-funds/user-interface-2.webp"
            className="w-full"
            unoptimized
          />
        </motion.div>
      </div>
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
            alt={"user-interface-image-3"}
            src={"/images/works/pend-funds/user-interface-3.webp"}
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
            alt={"user-interface-image-4"}
            src={"/images/works/pend-funds/user-interface-4.webp"}
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
          alt={"user-interface-image-5"}
          src={"/images/works/pend-funds/user-interface-5.webp"}
          className="w-full c-container"
          unoptimized
        />
      </Animated>
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
          alt={"user-interface-image-6"}
          src={"/images/works/pend-funds/user-interface-6.webp"}
          className="w-full c-container"
          unoptimized
        />
      </Animated>
    </div>
  );
}
