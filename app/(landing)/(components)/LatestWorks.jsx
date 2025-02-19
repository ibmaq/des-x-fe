"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { worksData } from "@/public/utils/data";

gsap.registerPlugin(ScrollTrigger);

export const LatestWorks = () => {
  useEffect(() => {
    gsap.utils.toArray(".latest-works-card-wrapper").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const cards = document.querySelectorAll(".latest-works-card-wrapper");
    cards.forEach((card) => {
      const glow = document.createElement("div");
      glow.classList.add("works-glowing-orb");
      card.appendChild(glow);

      const { width, height } = card.getBoundingClientRect();

      const updateBorderGradient = (x, y, width, height) => {
        const angle =
          Math.atan2(y - height / 2, x - width / 2) * (180 / Math.PI) - 45;
        const gradient = `linear-gradient(${angle}deg, rgba(86, 71, 255, 0.8), rgba(86, 71, 255, 0.2))`;
        card.style.setProperty("--border-gradient", gradient);
      };

      card.addEventListener("mousemove", (e) => {
        const { left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        gsap.to(glow, {
          duration: 1,
          x: x,
          y: y,
          scale: 1.2,
          ease: "power2.out",
          onUpdate: () => updateBorderGradient(x, y, width, height),
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(glow, {
          scale: 0.5,
          duration: 1,
          x: width - 250,
          y: height - 250,
          ease: "power2.out",
          onUpdate: () =>
            updateBorderGradient(width - 250, height - 250, width, height),
        });
      });

      gsap.set(glow, {
        scale: 0.5,
        x: width - 250,
        y: height - 250,
      });

      updateBorderGradient(width - 250, height - 250, width, height);
    });
  }, []);

  return (
    <div
      id="works"
      className="latest-works flex flex-col gap-10 items-center justify-center px-4 c-md:px-8 2xl:px-15 3xl:px-33.75 py-35 c-container"
    >
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
          <a
            key={workIndex}
            href={work.link !== "coming-soon" ? work.link : "#"}
            
            // className="latest-works-card p-5 border border-c-white/30 rounded-xl bg-c-black-2 overflow-hidden"
            className="latest-works-card-wrapper overflow-hidden"
            // scroll={work.link !== "coming-soon" ? true : false}
          >
            <div className="latest-works-card p-5 bg-c-black-2">
              <div className="flex flex-col lg:flex-row gap-10 z-2">
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
                              <svg viewBox="0 0 6 6" fill="none">
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
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
