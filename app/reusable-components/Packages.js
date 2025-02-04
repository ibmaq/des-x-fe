"use client";
import { Button } from "@/app/reusable-components/Button";
import { packagesData } from "@/public/utils/data";
import { gsap } from "gsap";
import { useEffect } from "react";

export const Packages = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
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
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-center px-4 c-md:px-8 2xl:px-15 py-15 2xl:py-35 contained">
      <div className="flex flex-col gap-3 items-center text-center">
        <h2 className="section-title">We keep it simple & Flexible</h2>
        <p className="text-gray-300 text-base font-medium capitalize">
          Choose whatever suites your needs & let get started!
        </p>
      </div>
      {/* <div className="flex flex-col gap-20 lg:mx-12"> */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {packagesData.map((work, workIndex) => (
          <div
            key={workIndex}
            className={`bg-package-card backdrop-blur-3xl flex flex-col gap-5 p-5 rounded-2.5 overflow-hidden ${
              work.recommended ? "recommended" : ""
            }`}
          >
            {work.recommended ? (
              <div className="package-card-grid-bg"></div>
            ) : null}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <p className="text-10 text-white font-bebas leading-none font-normal">
                  {work.title}
                </p>
                {work.recommended ? (
                  <div className="max-sm:hidden">
                    <div className="pill-anim-border pl-2 pr-2.5 py-1 rounded-full border border-gray-600 flex gap-1.5 items-center bg-gray-700 text-white w-fit">
                      <div className="pulse-shadow-wrapper"></div>
                      <span className="size-3 animate-pulse">
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
                      Recommended! 🔥
                    </div>
                  </div>
                ) : null}
              </div>
              <p className="flex gap-2 text-base/1.4 text-gray-400">
                {work.desc}
              </p>
              {work.recommended ? (
                <div className="c-md:hidden">
                  <div className="pill-anim-border pl-2 pr-2.5 py-1 rounded-full border border-gray-600 flex gap-1.5 items-center bg-gray-700 text-white w-fit">
                    <div className="pulse-shadow-wrapper"></div>
                    <span className="size-3 animate-pulse">
                      <svg
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="4.59541" cy="4" r="3" fill="currentColor" />
                      </svg>
                    </span>
                    Recommended! 🔥
                  </div>
                </div>
              ) : null}
            </div>
            <div className="w-screen h-px bg-c-hr" />
            <ul>
              {work?.offered?.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="flex items-center gap-3 text-gray-100 py-2.5"
                >
                  <span className="size-4 shrink-0">
                    <svg
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3979 5.7725L6.39795 11.7725C6.34569 11.8249 6.28359 11.8665 6.21522 11.8949C6.14685 11.9233 6.07354 11.9379 5.99951 11.9379C5.92548 11.9379 5.85217 11.9233 5.7838 11.8949C5.71543 11.8665 5.65333 11.8249 5.60107 11.7725L2.97607 9.1475C2.92375 9.09518 2.88224 9.03306 2.85393 8.96469C2.82561 8.89633 2.81104 8.82306 2.81104 8.74906C2.81104 8.67507 2.82561 8.60179 2.85393 8.53343C2.88224 8.46506 2.92375 8.40295 2.97607 8.35062C3.0284 8.2983 3.09051 8.2568 3.15888 8.22848C3.22724 8.20016 3.30051 8.18559 3.37451 8.18559C3.44851 8.18559 3.52178 8.20016 3.59014 8.22848C3.65851 8.2568 3.72062 8.2983 3.77295 8.35062L5.99998 10.5777L11.602 4.97656C11.7077 4.87089 11.851 4.81152 12.0004 4.81152C12.1499 4.81152 12.2932 4.87089 12.3989 4.97656C12.5046 5.08223 12.5639 5.22556 12.5639 5.375C12.5639 5.52444 12.5046 5.66776 12.3989 5.77344L12.3979 5.7725Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
            <Button
              text={"Book an Intro Call"}
              icon={"rightArrow"}
              theme={"primary"}
              width={"w-full"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
