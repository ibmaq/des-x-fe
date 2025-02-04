import { Packages } from "../reusable-components/Packages";
import { ServicesOffered } from "../reusable-components/ServicesOffered";
import { Testmionials } from "../reusable-components/Testmionials";
import { Hero } from "./(components)/Hero";
import { InfoSection } from "./(components)/InfoSection";
import { LatestWorks } from "./(components)/LatestWorks";
import { ShowReel } from "./(components)/ShowReel";
import { DesignExcellence } from "./(components)/DesignExcellence";

export default function Home() {
  return (
    // <div className="w-full mx-auto">
    <>
      <Hero />
      <ShowReel />
      <DesignExcellence />
      <LatestWorks />
      <InfoSection />
      <ServicesOffered />
      <Packages />
      <Testmionials />
    </>
    // </div>
  );
}
