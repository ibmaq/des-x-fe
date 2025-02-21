"use client";
import { Animated } from "@/app/reusable-components/Motion";
import Image from "next/image";
import { motion } from "motion/react";

export default function UserStories() {
  const topImageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="xl:px-20 px-4 c-md:px-8 2xl:px-15 3xl:px-0 flex flex-col lg:gap-20 gap-10">
      <h1 className="section-title text-c-white">User Stories</h1>
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
          alt="precious-medals"
          src={"/images/works/dably/user-stories-1.webp"}
          className="w-full c-container"
          unoptimized
        />
      </Animated>
      <div className="w-full grid grid-cols-2 md:gap-6.5 gap-3 c-container overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            width={0}
            height={0}
            alt="precious-medals"
            src={"/images/works/dably/user-stories-2.webp"}
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
            alt="precious-medals"
            src={"/images/works/dably/user-stories-3.webp"}
            className="w-full"
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  );
}
