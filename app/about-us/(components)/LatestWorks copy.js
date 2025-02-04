"use client";
import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import Link from "next/link";
import { motion } from "motion/react";

export const LatestWorks = () => {
  const worksData = [
    {
      id: 0,
      title: "Pendfunds",
      img: "/images/works/pendfunds.png",
      services: ["UX/UI Design", "Web Development"],
      link: "/work/pendfunds",
    },
    {
      id: 1,
      title: "Dably",
      img: "/images/works/dably.png",
      services: ["UX/UI Design", "Web Development"],
      link: "/work/dably",
    },
    {
      id: 2,
      title: "Snovos",
      img: "/images/works/snovos.png",
      services: ["UX/UI Re-Design"],
      link: "coming-soon",
    },
    {
      id: 3,
      title: "Rentto",
      img: "/images/works/rentto.png",
      services: ["UX/UI Re-Design"],
      link: "coming-soon",
    },
  ];

  return (
    <div className="flex gap-4 py-30 px-4 lg:px-20">
      {worksData.map((work, workIndex) => (
        <Link
          key={workIndex}
          href={work.link !== "coming-soon" ? work.link : "#"}
          scroll={work.link !== "coming-soon" ? true : false}
        >
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="border border-c-white/30 rounded-md overflow-hidden">
              <Image
                src={work.img}
                alt={work.title}
                width={388}
                height={443}
                className="w-[388px] h-[443px] object-cover"
              />
            </div>
            <div className="flex flex-col uppercase">
              <p className="font-extrabold text-xl lg:text-2xl/1.2 text-white">
                {work.title}
              </p>
              <div className="flex gap-2 text-base lg:text-4.8/none text-gray-400 -tracking-0.19">
                {work.services.map((service, serviceIndex) => (
                  <p key={serviceIndex}>{service}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
