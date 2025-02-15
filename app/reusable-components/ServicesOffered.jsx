"use client";
import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useRef } from "react";
import { servicesData } from "@/public/utils/data";
import { motion } from "motion/react";

export const ServicesOffered = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const scrollY = window.scrollY - sectionTop;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const stickyPoint = (index + 2) * 32;
          const endScroll = stickyPoint + 300;

          const clampedScrollY = Math.min(
            Math.max(scrollY, stickyPoint),
            endScroll
          );

          if (clampedScrollY >= stickyPoint && clampedScrollY <= endScroll) {
            card.style.position = "sticky";
            card.style.top = `${stickyPoint}px`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [servicesData]);
  return (
    <div className="flex flex-col gap-20 items-center justify-center px-4 c-md:px-8 py-35">
      <div className="flex flex-col gap-3 items-center text-center">
        <h2 className="section-title">What we do</h2>
        <p className="text-gray-300 text-base c-md:text-xl/normal font-medium capitalize">
          Today's users judge fast and scroll faster. We create{" "}
          <br className="max-sm:hidden" /> designs that stop them in their
          tracks through...
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:mx-12" ref={sectionRef}>
        {servicesData.map((work, workIndex) => (
          <div
            key={workIndex}
            className="flex flex-col-reverse lg:flex-row lg:justify-between gap-10 p-5 2xl:p-10 border border-c-white/30 rounded-xl bg-c-black-2"
            ref={(el) => (cardsRef.current[workIndex] = el)}
          >
            <div className="flex flex-col gap-8 lg:gap-48 2xl:justify-between">
              <div className="flex flex-col">
                <p className="text-13.5/none c-md:text-20/none 2xl:text-30/none text-c-white font-bebas -tracking-2">
                  {work.title}
                </p>
                <p className="flex gap-2 text-sm/1.4 c-md:text-xl text-gray-400 capitalize">
                  {work.content}
                </p>
              </div>
              <Button
                text={"Book an Intro Call"}
                icon={"rightArrow"}
                theme={"primary"}
                width={"w-full lg:max-w-105.5"}
                link={"/contact-us"}
              />
            </div>
            <Image
              src={work.img}
              alt="mobile-prototype-design"
              width={616}
              height={333}
              className="rounded-1 w-full lg:max-w-113.5 lg:h-83.25"
            />
          </div>
        ))}
      </div>
      {/* <Button text={"see all services"} icon={"arrow"} theme={"secondary"} /> */}
    </div>
  );
};
