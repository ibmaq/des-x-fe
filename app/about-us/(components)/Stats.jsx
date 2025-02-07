"use client";
import AnimatedNumber from "@/app/reusable-components/AnimatedNumber";
import { statsData } from "@/public/utils/data";
import { motion } from "motion/react";

export const Stats = () => {
  return (
    <motion.div
      className="stats py-15 2xl:py-35 origin-top"
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      viewport={{ once: true, amount: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 c-md:px-8 lg:mx-auto justify-center max-sm:gap-10 gap-30">
        {statsData.map((stat, statIndex) => (
          <div key={statIndex}>
            <div className="flex flex-col gap-5 w-full 2xl:max-w-90">
              <div className="flex flex-col items-center">
                <h2 className="text-25/none 2xl:text-35/none text-primary font-bebas">
                  <AnimatedNumber
                    value={stat.count}
                    prefix={stat?.prefix || ""}
                    suffix={stat?.suffix || ""}
                  />
                </h2>
                <p className="font-extrabold text-2xl/1.4 2xl:text-7/1.4 text-white -tracking-0.19">
                  {stat.title}
                </p>
              </div>
              <p className="font-medium text-base/1.2 2xl:text-xl/1.2 text-c-white-2/60 text-center capitalize -tracking-0.19">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
