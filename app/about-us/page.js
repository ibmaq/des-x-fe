import { Button } from "../reusable-components/Button";
import { ServicesOffered } from "../reusable-components/ServicesOffered";
import { Hero } from "./(components)/Hero";
import { LatestWorks } from "./(components)/LatestWorks";
import Methodology from "./(components)/Methodology";
import MethodologySM from "./(components)/Methodology-sm";
import { Stats } from "./(components)/Stats";

export default function AboutUs() {
  return (
    <>
      <div className="w-full mx-auto">
        <Hero />
        <LatestWorks />
        <Stats />
        <div className="hidden 2xl:block">
          <Methodology />
        </div>
        <div className="2xl:hidden">
          <MethodologySM />
        </div>
        <ServicesOffered />
      </div>
      <div className="sticky bottom-6 text-red-900 mx-auto w-full flex justify-center items-center z-10">
        <Button
          text="Let’s Discuss Your Project!"
          icon="rightArrow"
          link={"/contact-us"}
          theme="primary"
          className="inset-0 m-auto w-full h-full absolute"
        />
      </div>
      <div className="mt-10" />
    </>
  );
}
