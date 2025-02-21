"use client";
import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import { motion } from "motion/react";
import spanMobile from "@/public/images/landing/span-mobile.png";
export const Hero = () => {
  return (
    <>
      <section className="px-4 c-md:px-8 2xl:px-10 3xl:p-15">
        <div className="hero-container px-4 c-md:px-8 2xl:px-10 3xl:p-15 pt-20 c-md:pt-42.25 pb-5 c-md:pb-10">
          <div className="flex flex-col gap-28.5">
            <div className="flex flex-col gap-10">
              <h1 className="font-bebas text-white text-16.5 c-md:text-29 2xl:text-41.5 leading-none -tracking-3  c-md:-tracking-5 2xl:text-center">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeIn",
                  }}
                  className="inline-flex"
                >
                  How are we
                </motion.div>{" "}
                <br className="block c-sm:hidden 2xl:block" />
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeIn",
                    delay: 0.6,
                  }}
                  className="inline-flex"
                >
                  Reshaping
                </motion.div>{" "}
                <motion.div
                  initial={{ translateX: "-100%", width: 0 }}
                  animate={{ translateX: 0, width: "100%" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn",
                    delay: 0.9,
                  }}
                  className="hidden 2xl:inline-block overflow-hidden w-full max-w-[232px] relative -mb-4"
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
                      src={spanMobile}
                      alt="mobile-prototype-design"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        maxWidth: "232px",
                        height: "auto",
                      }}
                      className="w-full h-full object-cover border border-c-white/30 rounded-9.6"
                    />
                  </motion.div>
                </motion.div>{" "}
                <div className="flex flex-row c-sm:inline-flex c-md:inline lg:inline-flex lg:flex-row-reverse items-center max-sm:justify-between c-sm:gap-4">
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
                    Designs
                  </motion.div>{" "}
                  <motion.div
                    initial={{ translateX: "-100%", width: 0 }}
                    animate={{ translateX: 0, width: "100%" }}
                    transition={{
                      duration: 0.5,
                      ease: "easeIn",
                      delay: 0.9,
                    }}
                    className="inline-flex 2xl:hidden overflow-hidden w-full max-w-[118px] c-md:max-w-[232px] relative"
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
                        src={spanMobile}
                        alt="mobile-prototype-design"
                        sizes="100vw"
                        style={{
                          width: "100%",
                          maxWidth: "232px",
                          height: "auto",
                        }}
                        className="w-full h-full object-cover border border-c-white/30 rounded-9.6"
                      />
                    </motion.div>
                  </motion.div>{" "}
                </div>
              </h1>
              <p className="text-c-white 2xl:text-center -tracking-0.19 text-base lg:text-2xl/normal font-medium capitalize">
                We’re changing the design game!
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Button
                text={"Book an Intro Call"}
                icon={"rightArrow"}
                theme={"secondary"}
                width={"w-full max-w-[795px] mx-auto"}
                link={"/contact-us"}
              />
            </div>
          </div>
          <div className="hero-bg-1"></div>
          <div className="hero-bg-2"></div>
        </div>
      </section>
    </>
  );
};
