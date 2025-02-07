"use client";
import { methodsData } from "@/public/utils/data";
import { motion } from "motion/react";

export default function MethodologySM() {
  return (
    <div className="py-35 px-4 c-md:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <p className="text-15/none c-md:text-30/none text-c-white font-bebas -tracking-2">
            Methodology
          </p>
          <p className="text-base c-md:text-xl/6 text-gray-400 capitalize">
            Understanding your vision is where it all begins. We dive deep into
            your goals, audience, and challenges to uncover opportunities that
            drive impact. Research and collaboration lay the foundation for
            success.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {methodsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-2 border border-c-white/30 rounded-xl bg-c-black flex flex-col gap-0.5"
            >
              <div className="p-1.5 rounded-md bg-c-white/12 font-bebas text-c-white text-2xl/0.8 w-fit">
                {`${index < 10 ? "0" : ""}${index + 1}`}
              </div>
              <div className="p-5 c-md:p-10 pt-0 c-md:pt-0 flex flex-col gap-22.5 c-md:gap-21.5">
                <div className="flex flex-col">
                  <p className="text-15.5/none c-md:text-25/none text-c-white font-bebas -tracking-3.84">
                    {item.title}
                  </p>
                  <p className="text-sm/1.4 c-md:text-xl/1.2 text-gray-200 capitalize w-full">
                    {item.subTitle}
                  </p>
                </div>
                <p className="text-base/1.4 c-md:text-xl text-gray-100 capitalize w-full">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
