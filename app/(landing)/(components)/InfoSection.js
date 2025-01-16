import Image from "next/image";
import { Button } from "../../reusable-components/Button";

export const InfoSection = () => {
  return (
    <div className="flex flex-col gap-15 items-center justify-center py-30 px-9">
      <h2 className="font-bebas text-29 leading-0.92 text-cust-white/30 text-center -tracking-2.38">
        Hello, I'm <span className="text-cust-white">Osama</span>,{" "}
        <span className="text-cust-white">a</span>{" "}
        <span className="text-primary">
          Product <br /> designer
        </span>{" "}
        <span>
          <Image
            src={"/images/span-mobile.png"}
            alt="mobile-prototype-design"
            width={90}
            height={90}
            className="border border-cust-white/30 rounded-md mt-4 inline-flex"
          />
        </span>{" "}
        based in <span className="text-cust-white">Pakistan</span>. With{" "}
        <span className="text-cust-white">5+ years of experience</span> and a
        passion for <span className="text-cust-white">cutting-edge design</span>{" "}
        <span>
          <Image
            src={"/images/span-mobile.png"}
            alt="mobile-prototype-design"
            width={90}
            height={90}
            className="border border-cust-white/30 rounded-md mt-4 inline-flex"
          />
        </span>{" "}
        I'm committed to creating{" "}
        <span className="text-cust-white">
          impactful user{" "}
          <span>
            <Image
              src={"/images/span-mobile.png"}
              alt="mobile-prototype-design"
              width={90}
              height={90}
              className="border border-cust-white/30 rounded-md mt-4 inline-flex"
            />
          </span>{" "}
          Experiences
        </span>
      </h2>
      <Button text={"Get to know us"} icon={"play"} theme={"primary"} />
    </div>
  );
};
