import { Packages } from "../reusable-components/Packages";
import { ServicesOffered } from "../reusable-components/ServicesOffered";
import { Testimonials } from "../reusable-components/Testimonials";
import { DesignExcellence } from "./(components)/DesignExcellence";
import { Hero } from "./(components)/Hero";
import { InfoSection } from "./(components)/InfoSection";
import { LatestWorks } from "./(components)/LatestWorks";
import { ShowReel } from "./(components)/ShowReel";
import { TrustedBy } from "./(components)/TrustedBy";

export default function Home() {
  return (
    // <div className="w-full mx-auto">
    <>
      <Hero />
      <div className="py-15 c-md:py-30 2xl:py-30 flex flex-col gap-20 items-center justify-center">
        <TrustedBy />
        <ShowReel />
      </div>
      <DesignExcellence />
      <LatestWorks />
      <InfoSection />
      <ServicesOffered />
      <Packages />
      <Testimonials />
    </>
    // </div>
  );
}
