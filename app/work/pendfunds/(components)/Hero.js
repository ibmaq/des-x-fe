import Image from "next/image";
import { Button } from "../../../reusable-components/Button";

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-32 items-center justify-center">
      <div className="text-center">
        <h1 className="font-bebas text-white text-49/none -tracking-5.04 uppercase">
          Crafting <span className="text-primary">Experiences</span>
        </h1>
        <h1 className="font-bebas text-white text-49/none -tracking-5.04 uppercase flex gap-6.75">
          One pixel{" "}
          <span className="text-primary">
            <Image
              src={"/images/span-mobile.png"}
              alt="mobile-prototype-design"
              width={232}
              height={136}
              className="border border-cust-white/30 rounded-md mt-4"
            />
          </span>{" "}
          at a time
        </h1>
      </div>
      <div className="w-full flex flex-col gap-8 items-center max-w-182 mx-auto">
        <p className="uppercase text-cust-white text-center -tracking-0.19 text-xl/6 font-medium">
          Where creativity meets strategy. We don’t just design—we craft
          experiences that captivate your audience, connect with their needs,
          and drive results that matter. Bold, innovative, and tailored to your
          vision—we’re here to turn ideas into impact.
        </p>
        <Button text={"start a project"} icon={"plus"} theme={"primary"} />
      </div>
    </div>
  );
};
