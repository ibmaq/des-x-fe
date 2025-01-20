import { Button } from "@/app/reusable-components/Button";
import DablyIcon from "@/public/utils/Icons";

export default function HeaderSection({ children,heading }) {
  return (
    <div className="w-full max-w-182 mx-auto py-28 flex flex-col justify-center items-center gap-8">
      <div className="w-fit flex flex-col gap-5">
        <div className="flex flex-col gap-3 justify-center items-center">
          {children}
          {/* <DablyIcon /> */}
          <h3 className="text-49/none -tracking-5.04 text-cust-white font-bebas">
            {heading}
          </h3>
        </div>
        <p className="font-medium text-xl/6 -tracking-0.19 text-gray-200 text-center ">
          Where creativity meets strategy. We don’t just design—we craft
          experiences that captivate your audience, connect with their needs,
          and drive results that matter. Bold, innovative, and tailored to your
          vision—we’re here to turn ideas into impact.
        </p>
      </div>
      
      <Button
        text={"Similar project? Get in touch"}
        icon={"plus"}
        theme={"primary"}
      />

    </div>
  );
}
