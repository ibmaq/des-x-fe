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
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      pillContent: "We help raise 100k+ USD for Pendfunds 🔥 - See Case Study",
      update: true,
      img: "/images/works/pendfunds.png",
      services: ["UX/UI Design", "Web Development"],
      link: "/work/pendfunds",
    },
    {
      id: 1,
      title: "Dably",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      pillContent: "Web3 based startup",
      update: false,
      img: "/images/works/dably.png",
      services: ["UX/UI Design", "Web Development"],
      link: "/work/dably",
    },
    {
      id: 2,
      title: "Snovos",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      update: false,
      pillContent: "Full UI Revamp 🚀",
      img: "/images/works/snovos.png",
      services: ["UX/UI Re-Design"],
      link: "coming-soon",
    },
    {
      id: 3,
      title: "Rentto",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      update: false,
      pillContent: "Full UI Revamp 🚀",
      img: "/images/works/rentto.png",
      services: ["UX/UI Re-Design"],
      link: "coming-soon",
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center justify-center px-4 c-md:px-8 2xl:px-15 3xl:px-33.75 py-35 contained">
      <div className="flex flex-col gap-3 items-center text-center">
        <h2 className="section-title">Who we have Helped</h2>
        <p className="text-gray-300 text-base c-md:text-xl/normal font-medium capitalize">
          Today's users judge fast and scroll faster. We create{" "}
          <br className="max-sm:hidden" /> designs that stop them in their
          tracks through...
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {worksData.map((work, workIndex) => (
          <Link
            key={workIndex}
            href={work.link !== "coming-soon" ? work.link : "#"}
            className="p-5 border border-c-white/30 rounded-xl bg-c-black-2"
            scroll={work.link !== "coming-soon" ? true : false}
          >
            <motion.div
              className="flex flex-col lg:flex-row gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src={work.img}
                alt={work.title}
                width={616}
                height={333}
                className="rounded-xl w-full lg:max-w-113.5 2xl:max-w-147 2xl:h-107.5"
              />
              <div className="flex flex-col gap-10 2xl:justify-between">
                <div className="flex flex-col">
                  <p className="text-13.5/none c-md:text-20/none text-c-white font-bebas -tracking-2">
                    {work.title}
                  </p>
                  <p className="flex gap-2 text-sm/1.4 c-md:text-base/1.4 text-gray-400 capitalize">
                    {work.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    className={`pill-anim-border w-fit text-white bg-c-gray-1 ${
                      work.update ? "px-1 c-md:pl-1 c-md:pr-2.5" : "px-2.5"
                    } py-1`}
                  >
                    {work.update ? (
                      <div className="pulse-shadow-wrapper"></div>
                    ) : null}
                    <div className="relative z-1 font-medium flex gap-3 items-center">
                      {work.update ? (
                        <div className="pl-2 pr-2.5 py-1 rounded-full border border-gray-600 flex gap-1.5 items-center bg-gray-700 max-c-md:w-20">
                          <span className="size-2 shrink-0 animate-pulse text-white">
                            <svg
                              viewBox="0 0 9 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="4.59541"
                                cy="4"
                                r="3"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Update
                        </div>
                      ) : (
                        <span className="size-1.5">
                          <svg
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx={3} cy={3} r={3} fill="white" />
                          </svg>
                        </span>
                      )}
                      <p
                        className={`text-sm ${
                          work.update ? "leading-5" : "leading-none"
                        }`}
                      >
                        {work.pillContent}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 text-lg/none lg:text-4.8/none text-gray-400 -tracking-0.19 uppercase">
                    {work.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center gap-1.5 whitespace-nowrap"
                      >
                        {serviceIndex !== 0 && (
                          <span className="size-1.5">
                            <svg
                              viewBox="0 0 6 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx={3} cy={3} r={3} fill="white" />
                            </svg>
                          </span>
                        )}
                        <p>{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};
