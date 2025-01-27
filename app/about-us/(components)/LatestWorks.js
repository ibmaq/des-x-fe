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
    <div className="flex flex-col gap-15 items-center justify-center py-30 px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9.5">
        {worksData.map((work, workIndex) => (
          <Link
            key={workIndex}
            href={work.link !== "coming-soon" ? work.link : "#"}
            className={"relative group"}
            scroll={work.link !== "coming-soon" ? true : false}
          >
            <motion.div
              className="flex flex-col gap-5 hover:-translate-y-4 transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="border border-cust-white/30 rounded-md overflow-hidden">
                <Image
                  src={work.img}
                  alt={work.title}
                  width={1000}
                  height={90}
                />
              </div>
              <div className="flex max-sm:flex-col justify-between lg:items-center uppercase">
                <p className="font-extrabold text-xl lg:text-2xl/1.2 text-white">
                  {work.title}
                </p>
                <div className="flex gap-2 text-base lg:text-4.8/none text-gray-400 -tracking-0.19">
                  {work.services.map((service, serviceIndex) => (
                    <p key={serviceIndex}>{service}</p>
                  ))}
                </div>
              </div>
              <div
                className={`absolute inset-0 opacity-0 ${
                  work.link === "coming-soon"
                    ? "group-hover:opacity-100 cursor-default"
                    : ""
                } bg-black/90 flex justify-center items-center transition-opacity duration-300 ease-in-out`}
              >
                <div
                  className={
                    "uppercase rounded-2.5 backdrop-blur-10 p-5 border text-cust-black bg-cust-white border-white font-extrabold text-base lg:text-xl leading-none -tracking-0.19"
                  }
                >
                  Coming Soon
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <Button text={"see all works"} icon={"arrow"} theme={"secondary"} />
    </div>
  );
};
