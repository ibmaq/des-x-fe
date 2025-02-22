"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";
import { designExcellenceData } from "@/public/utils/data";

export const DesignExcellence = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".services-card-wrapper");
    cards.forEach((card) => {
      const glow = document.createElement("div");
      glow.classList.add("glowing-orb");
      card.appendChild(glow);

      card.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        gsap.to(card, {
          duration: 0.1,
          rotationY: (xPercent - 50) * 0.2,
          rotationX: (yPercent - 50) * -0.2,
          ease: "power2.out",
        });

        gsap.to(glow, {
          duration: 0.1,
          x: x,
          y: y,
          opacity: 1,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.3,
        });

        gsap.to(glow, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      gsap.set(glow, { opacity: 0 });
    });
  }, []);

  return (
    <>
      <section className="services flex flex-col gap-20 items-center justify-center px-4 c-md:px-8 2xl:px-15 3xl:px-0 py-35">
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="section-title">
            How we Make sure you receive the Best!
          </h2>
          <p className="text-gray-300 text-base c-md:text-xl/normal font-medium capitalize">
            Today's users judge fast and scroll faster. We create{" "}
            <br className="max-sm:hidden" /> designs that stop them in their
            tracks through...
          </p>
        </div>
        {/* <div className="flex flex-col gap-20 lg:mx-12"> */}
        <div className="container grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 c-container">
          {designExcellenceData.map((work, workIndex) => (
            <div
              key={workIndex}
              className="services-card-wrapper overflow-hidden rounded-xl"
            >
              <div className="services-card flex flex-col gap-8 p-5">
                <Image
                  src={work.img}
                  alt="asbtract-image-look-like-shiny-metal-strips-rounded-to-make-rings"
                  width={162}
                  height={152}
                />
                <div className="flex flex-col gap-3">
                  <p className="text-10/none text-white font-bebas">
                    {work.title}
                  </p>
                  <p className="flex gap-2 text-base/snug text-gray-400 capitalize">
                    {work.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
