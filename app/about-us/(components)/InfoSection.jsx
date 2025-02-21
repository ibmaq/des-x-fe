import Image from "next/image";
import { Button } from "../../reusable-components/Button";

export const InfoSection = () => {
  return (
    <>
      <section className="flex flex-col gap-15 items-center justify-center py-30 px-4 lg:px-9">
        <h2 className="font-bebas text-5xl lg:text-29 leading-0.92 text-c-white/30 lg:text-center -tracking-2.38">
          Hello, I'm <span className="text-c-white">Osama</span>,{" "}
          <span className="text-c-white">a</span>{" "}
          <span className="text-primary">
            Product <br /> designer
          </span>{" "}
          <span>
            <Image
              src={"/images/landing/span-mobile.png"}
              alt="mobile-prototype-design"
              width={90}
              height={90}
              className="max-sm:size-9 border font- border-c-white/30 rounded-md lg:mt-4 inline-flex"
            />
          </span>{" "}
          based in <span className="text-c-white">Pakistan</span>. With{" "}
          <span className="text-c-white">5+ years of experience</span> and a
          passion for <span className="text-c-white">cutting-edge design</span>{" "}
          <span>
            <Image
              src={"/images/landing/span-mobile.png"}
              alt="mobile-prototype-design"
              width={90}
              height={90}
              className="max-sm:size-9 border border-c-white/30 rounded-md lg:mt-4 inline-flex"
            />
          </span>{" "}
          I'm committed to creating{" "}
          <span className="text-c-white">
            impactful user{" "}
            <span>
              <Image
                src={"/images/landing/span-mobile.png"}
                alt="mobile-prototype-design"
                width={90}
                height={90}
                className="max-sm:size-9 border border-c-white/30 rounded-md lg:mt-4 inline-flex"
              />
            </span>{" "}
            Experiences
          </span>
        </h2>
        <Button
          text={"Get to know us"}
          icon={"play"}
          theme={"primary"}
          link={"/about-us"}
        />
      </section>
    </>
  );
};
