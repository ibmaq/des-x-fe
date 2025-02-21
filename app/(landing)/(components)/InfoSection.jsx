"use client";
import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import { motion } from "motion/react";

export const InfoSection = () => {
  return (
    <>
      <section className="flex flex-col gap-15 py-15 2xl:py-35 px-4 c-md:px-8 2xl:px-15">
        <div className="flex flex-col items-center justify-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
            }}
            className="max-lg:hidden"
          >
            <div className="pill-anim-border pl-2 pr-2.5 py-1 rounded-full border border-gray-600 flex gap-1.5 items-center bg-gray-700 text-white w-fit text-2xl/none">
              <div className="pulse-shadow-wrapper"></div>
              👑 From the Founder
            </div>
          </motion.div>
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(10px)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeInOut",
              filter: { duration: 1.2, ease: "easeInOut" },
              WebkitMaskImage: { duration: 1.2, ease: "easeInOut" },
              maskImage: { duration: 1.2, ease: "easeInOut" },
            }}
            viewport={{ once: false, amount: 0.6 }}
            className="font-bebas text-6xl/none c-md:text-20/none lg:text-28.5/0.94 text-c-white/30 lg:text-center -tracking-2.38 origin-top"
          >
            <span className="text-c-white">Design</span> isn't about making
            things <br className="hidden lg:block" />
            <br className="block c-sm:hidden" />
            <span className="text-primary">look good</span>{" "}
            <span>
              <Image
                src={"/images/spans/oj.webp"}
                alt="mobile-prototype-design"
                width={60}
                height={60}
                className="border border-c-white/30 rounded-3.5 inline-flex aspect-square object-cover ml-1 lg:w-22.5 lg:h-22.5"
                unoptimized
              />
            </span>{" "}
            <br className="block lg:hidden" />
            It’s about making <span className="text-c-white">Ideas </span>
            <br className="hidden lg:block" />
            work <span className="text-primary">beautifully.</span>{" "}
            <span>
              <Image
                src={"/images/spans/mobile-1.webp"}
                alt="mobile-prototype-design"
                width={60}
                height={60}
                className="border border-c-white/30 rounded-3.5 inline-flex aspect-square object-cover ml-1 lg:w-22.5 lg:h-22.5"
                unoptimized
              />
            </span>{" "}
            <br className="hidden c-md:block lg:hidden" />
            We’re
            <br className="hidden lg:block" /> committed to creating{" "}
            <span className="text-c-white">
              impactful <br /> User
            </span>{" "}
            <span>
              <Image
                src={"/images/spans/mobile-2.webp"}
                alt="mobile-prototype-design"
                width={60}
                height={60}
                className="border border-c-white/30 rounded-3.5 inline-flex aspect-square object-cover ml-1 lg:w-22.5 lg:h-22.5"
                unoptimized
              />
            </span>{" "}
            <span className="text-c-white">Experiences </span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.4,
            ease: "easeIn",
          }}
          className="flex flex-col lg:items-center lg:justify-center"
        >
          <h4 className="text-2xl 2xl:text-8 leading-1.4 -tracking-0.19 text-gray-50">
            Osama Jilani
          </h4>
          <p className="text-base/1.4 -tracking-0.19 text-gray-400">Founder</p>
        </motion.div>
        <Button
          text={"Get to know us"}
          icon={"rightArrow"}
          theme={"primary"}
          width={"w-full lg:max-w-105.5"}
          link={"/about-us"}
          classes={"lg:mx-auto"}
        />
      </section>
    </>
  );
};
