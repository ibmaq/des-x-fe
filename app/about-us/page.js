import { ServicesOffered } from "../reusable-components/ServicesOffered";
import { Hero } from "./(components)/Hero";
import { LatestWorks } from "./(components)/LatestWorks";
import Methodology from "./(components)/Methodology";
import MethodologySM from "./(components)/Methodology-sm";
import { Stats } from "./(components)/Stats";

export default function AboutUs() {
  return (
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
  );
}
