import Image from "next/image";
import { Button } from "../../reusable-components/Button";

export const InfoSection = () => {
  return (
    <div className="flex flex-col gap-15 items-center justify-center py-15 2xl:py-35 px-4 c-md:px-8 2xl:px-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="max-lg:hidden">
          <div className="pill-anim-border pl-2 pr-2.5 py-1 rounded-full border border-gray-600 flex gap-1.5 items-center bg-gray-700 text-white w-fit text-2xl/none">
            <div className="pulse-shadow-wrapper"></div>
            👑 From the Founder
          </div>
        </div>
        <h2 className="font-bebas text-6xl/none c-md:text-20/none lg:text-28.5/0.94 text-c-white/30 lg:text-center -tracking-2.38">
          <span className="text-c-white">Design</span> isn't about making things{" "}
          <br className="hidden lg:block" />
          <br className="block c-sm:hidden" />
          <span className="text-primary">look good</span>{" "}
          <span>
            <Image
              src={"/images/landing/span-mobile.png"}
              alt="mobile-prototype-design"
              width={60}
              height={60}
              className="border border-c-white/30 rounded-3.5 inline-flex aspect-square object-cover ml-1 lg:w-22.5 lg:h-22.5"
            />
          </span>{" "}
          <br className="block lg:hidden" />
          It’s about making <span className="text-c-white">Ideas </span>
          <br className="hidden lg:block" />
          work <span className="text-primary">beautifully.</span>{" "}
          <span>
            <Image
              src={"/images/landing/span-mobile.png"}
              alt="mobile-prototype-design"
              width={60}
              height={60}
              className="border border-c-white/30 rounded-3.5 inline-flex aspect-square object-cover ml-1 lg:w-22.5 lg:h-22.5"
            />
          </span>{" "}
          <br className="hidden c-md:block lg:hidden" />
          We’re
          <br className="hidden lg:block" /> committed to creating{" "}
          <span className="text-c-white">
            impactful <br /> User
          </span>{" "}
          <span>
            <Image
              src={"/images/landing/span-mobile.png"}
              alt="mobile-prototype-design"
              width={60}
              height={60}
              className="border border-c-white/30 rounded-3.5 inline-flex aspect-square object-cover ml-1 lg:w-22.5 lg:h-22.5"
            />
          </span>{" "}
          <span className="text-c-white">Experiences </span>
        </h2>
      </div>
      <Button
        text={"Get to know us"}
        icon={"rightArrow"}
        theme={"primary"}
        width={"w-full lg:max-w-105.5"}
      />
    </div>
  );
};
