import { Button } from "@/app/reusable-components/Button";

export default function HeaderSection({ children, heading }) {
  return (
    <div className="w-full max-w-182 mx-auto lg:py-28 py-10 md:py-20 flex flex-col justify-center items-center md:gap-8 gap-5 max-md:px-4">
      <div className="h-8 md:hidden" />
      <div className="w-fit flex flex-col md:gap-5 gap-2">
        <div className="flex flex-col gap-3 justify-center items-center">
          {children}
          {/* <DablyIcon /> */}
          <h3 className="md:text-49/none text-28/none -tracking-5.04 text-cust-white font-bebas">
            {heading}
          </h3>
        </div>
        <p className="font-medium text-xl/6 -tracking-0.19 text-gray-200 text-center">
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
