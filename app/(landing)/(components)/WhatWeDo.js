"use client";
import Image from "next/image";
import { Button } from "../../reusable-components/Button";
import { useEffect, useRef } from "react";

export const WhatWeDo = () => {
  const servicesData = [
    {
      id: 0,
      title: "WEB App DESIGN",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 1,
      title: "Mobile App Design",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 2,
      title: "LANDING PAGE",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
    {
      id: 3,
      title: "Pitch Deck",
      content:
        "Lorem ipsum dolor sit amet consectetur. Faucibus sed enim donec in nec integer. Quisque ut etiam fringilla sed viverra viverra. Tempus in velit eu cras pellentesque. Viverra mauris gravida donec eu metus rhoncus adipiscing amet et.",
      img: "/images/works/pendfunds.png",
    },
  ];

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
  // card.style.marginLeft = `${scrollY * 0.2}px`;
  // card.style.marginRight = `${scrollY * 0.2}px`;

  return (
    <div className="flex flex-col gap-20 items-center justify-center lg:py-30 max-sm:px-6">
      <h2 className="font-bebas text-white text-17 lg:text-48 leading-0.9 -tracking-3.84 uppercase">
        What we Offer
      </h2>
      <div className="flex flex-col gap-20 lg:mx-12" ref={sectionRef}>
        {servicesData.map((work, workIndex) => (
          <div
            key={workIndex}
            className="flex flex-col-reverse md:flex-row lg:gap-25 lg:p-10 rounded-xl border border-cust-white/30 bg-cust-black"
            ref={(el) => (cardsRef.current[workIndex] = el)}
            style={{ transition: "width 0.3s ease" }}
          >
            <div className="flex flex-col gap-8 w-full max-sm:p-4">
              <div className="flex flex-col">
                <p className="text-15.5 lg:text-30/1.2 text-white font-bebas -tracking-2.88">
                  {work.title}
                </p>
                <p className="flex gap-2 text-base/snug text-gray-400 -tracking-0.19">
                  {work.content}
                </p>
              </div>
              <Button
                text={"start a project"}
                icon={"plus"}
                theme={"primary"}
              />
            </div>
            <Image
              src={work.img}
              alt="mobile-prototype-design"
              width={450}
              height={90}
              className="border border-cust-white/30 rounded-md"
            />
          </div>
        ))}
      </div>
      <Button text={"see all services"} icon={"arrow"} theme={"secondary"} />
    </div>
  );
};
