"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Footer = () => {
  const textRef = useRef(null);
  const [customSizes, updateCustomSizes] = useState({
    font: "92px",
    height: "92px",
  });

  useEffect(() => {
    const adjustFontSize = () => {
      if (!textRef.current) return;

      const windowWidth = window.innerWidth;
      let paddings = 32;
      let divider = 3.75;

      if (windowWidth >= 420) divider = 3.8;
      if (windowWidth >= 720) paddings = 64;
      if (windowWidth >= 1024) divider = 3.9;
      if (windowWidth >= 1340) divider = 3.95;
      if (windowWidth >= 1440) {
        paddings = 80;
        divider = 3.75;
      }
      if (windowWidth >= 1600) divider = 3.8;
      if (windowWidth >= 2560) {
        updateCustomSizes((prev) =>
          prev.font !== "490px" ? { font: "490px", height: "490px" } : prev
        );
        return;
      }

      const calculatedFontSize = (windowWidth - paddings) / divider;
      const calculatedHeight = calculatedFontSize;

      updateCustomSizes((prev) =>
        prev.font !== `${calculatedFontSize}px`
          ? { font: `${calculatedFontSize}px`, height: `${calculatedHeight}px` }
          : prev
      );
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, []);
  return (
    <footer className=" bg-c-white">
      <div className="w-full 4xl:max-w-screen-3xl 4xl:mx-auto px-4 c-md:px-8 lg:px-10 pt-10 flex flex-col gap-15 font-bebas">
        <p className="text-c-black text-13.5 c-md:text-15.5 -tracking-1 leading-none">
          Your Search for a design partner ends here..
        </p>
        <a
          ref={textRef}
          href={"/contact-us"}
          // 
          className="relative group overflow-hidden"
          style={{
            height: customSizes.height,
          }}
        >
          <h2
            className="text-c-black underline absolute left-0 footer-text-1 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-700 footer-text-size"
            style={{
              fontSize: customSizes.font,
            }}
          >
            GET IN TOUCH
          </h2>
          <h2
            className="group-hover:text-c-black underline absolute left-0 footer-text-2 text-c-white translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-700 footer-text-size"
            style={{
              fontSize: customSizes.font,
            }}
          >
            GET IN TOUCH
          </h2>
        </a>
      </div>
    </footer>
  );
};
