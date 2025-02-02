"use client";
import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import { motion } from "motion/react";
import spanMobile from "@/public/images/landing/span-mobile.png";
// import from "/images/landing/span-mobile.png"
export const Hero = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-16 items-center justify-center pt-16 lg:pt-44 pb-36 max-sm:px-4">
      <div className="text-center">
        <h1 className="font-bebas text-white text-18.5 md:text-41.5 leading-0.8 md:-tracking-5.04 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            className="inline-flex"
          >
            Designs that
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
              delay: 0.3,
            }}
            className="inline-flex text-primary"
          >
            Define
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
              delay: 0.6,
            }}
            className="inline-flex md:text-36.5"
          >
            Experience
          </motion.div>{" "}
          <motion.div
            initial={{ translateX: "-100%", width: 0 }}
            animate={{ translateX: 0, width: 232 }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              delay: 0.9,
            }}
            className="inline-block overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.4,
              }}
              className="w-full h-full"
            >
              <Image
                src={"/images/landing/span-mobile.png"}
                alt="mobile-prototype-design"
                width={232}
                height={136}
                className="w-full h-full object-cover border border-c-white/30 rounded-md"
              />
            </motion.div>
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
              delay: 0.6,
            }}
            className="inline-flex md:text-36.5"
          >
            That
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeIn",
              delay: 0.9,
            }}
            className="inline-flex text-primary md:text-36.5"
          >
            Inspires
          </motion.div>
        </h1>
      </div>
      <div className="w-full flex flex-col gap-8 items-center max-w-182 mx-auto">
        <p className="uppercase text-c-white text-center -tracking-0.19 text-base/none lg:text-xl/6 font-medium">
          Where creativity meets strategy. We don’t just design—we craft
          experiences that captivate your audience, connect with their needs,
          and drive results that matter. Bold, innovative, and tailored to your
          vision—we’re here to turn ideas into impact.
        </p>
        <Button text={"start a project"} icon={"plus"} theme={"primary"} />
      </div>
    </div>
  );
};
