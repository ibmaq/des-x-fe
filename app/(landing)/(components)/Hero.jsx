"use client";
import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import { motion } from "motion/react";
import spanMobile from "@/public/images/landing/span-mobile.png";
import Link from "next/link";
// import from "/images/landing/span-mobile.png"
export const Hero = () => {
  return (
    <div className="px-4 c-md:px-8 2xl:px-10 3xl:p-15">
      <div className="hero-container px-4 c-md:px-8 2xl:px-10 3xl:p-15 pt-20 c-md:pt-42.25 pb-5 c-md:pb-10">
        {/* <div className="w-full flex flex-col gap-6 lg:gap-12 items-center justify-center"> */}
        <div className="flex flex-col gap-28.5">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <Link
                href={"/work/pendfunds"}
                className="pill-anim-border w-fit mx-auto text-white bg-c-gray-1 pl-1 pr-2.5 py-1 cursor-pointer"
              >
                <div className="pulse-shadow-wrapper"></div>
                <div className="relative z-1 text-sm/none font-medium flex gap-3">
                  <div className="pl-2 pr-2.5 py-1 rounded-full border border-gray-600 flex gap-1.5 items-center bg-gray-700">
                    <span className="size-3 animate-pulse text-primary">
                      <svg
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4.59541" cy="4" r="3" fill="currentColor" />
                      </svg>
                    </span>
                    Update
                  </div>
                  <p className="flex gap-1 items-center text-xs/1.4 c-md:text-sm/1.4">
                    We helped raise 100k+ USD for Pendfunds 🔥 - See Case Study{" "}
                    <span className="size-4 text-white hidden c-md:block">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5302 8.35613C14.595 8.18598 14.612 7.99874 14.5789 7.81811C14.5458 7.63748 14.4641 7.47158 14.3441 7.34139L10.9154 3.61758C10.8363 3.52867 10.7417 3.45775 10.6371 3.40896C10.5325 3.36016 10.42 3.33448 10.3062 3.33341C10.1924 3.33234 10.0795 3.35589 9.97419 3.4027C9.86884 3.44951 9.77314 3.51863 9.69265 3.60604C9.61217 3.69345 9.54852 3.7974 9.50542 3.91181C9.46232 4.02622 9.44063 4.1488 9.44162 4.27242C9.44261 4.39603 9.46625 4.51819 9.51118 4.63177C9.5561 4.74535 9.6214 4.84807 9.70328 4.93395L11.6697 7.06955H3.45259C3.22525 7.06955 3.00722 7.16764 2.84647 7.34222C2.68571 7.51681 2.5954 7.7536 2.5954 8.00051C2.5954 8.24741 2.68571 8.4842 2.84647 8.65879C3.00722 8.83338 3.22525 8.93146 3.45259 8.93146H11.6697L9.70413 11.0661C9.62226 11.152 9.55696 11.2547 9.51203 11.3683C9.46711 11.4819 9.44346 11.6041 9.44247 11.7277C9.44148 11.8513 9.46317 11.9739 9.50627 12.0883C9.54937 12.2027 9.61302 12.3066 9.69351 12.394C9.77399 12.4814 9.8697 12.5506 9.97505 12.5974C10.0804 12.6442 10.1933 12.6677 10.3071 12.6667C10.4209 12.6656 10.5334 12.6399 10.638 12.5911C10.7425 12.5423 10.8371 12.4714 10.9162 12.3825L14.345 8.65869C14.4244 8.57202 14.4873 8.46921 14.5302 8.35613Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>{" "}
                  </p>
                </div>
              </Link>
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
                  Premium
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
                  Design
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
                  For Your
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
                      delay: 0.6,
                    }}
                    className="inline-flex"
                  >
                    Startup
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
            </div>
            <p className="text-c-white 2xl:text-center -tracking-0.19 text-base lg:text-2xl/normal font-medium capitalize">
              We help founders ship faster, convert better, and raise more.
            </p>
          </div>
          <div className="flex flex-col md:flex-row 2xl:mx-auto gap-4 items-center">
            <Button
              text={"Book an Intro Call"}
              icon={"rightArrow"}
              theme={"secondary"}
              width={"w-full lg:w-[489px]"}
              link={"/contact-us"}
            />
            <Button
              text={"Latest Work @ 2024"}
              icon={"rightArrow"}
              theme={"tertiary"}
              width={"w-full lg:w-[290px]"}
              link={"/#works"}
            />
          </div>
        </div>
        <div className="hero-bg-1"></div>
        <div className="hero-bg-2"></div>
      </div>
    </div>
  );
};
