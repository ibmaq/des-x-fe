import { Hero } from "./(components)/Hero";
import { InfoSection } from "./(components)/InfoSection";
import { LatestWorks } from "./(components)/LatestWorks";
import { Packages } from "./(components)/Packages";
import { ShowReel } from "./(components)/ShowReel";
import { Testmionials } from "./(components)/Testmionials";
import { TrustedBy } from "./(components)/TrustedBy";
import { WhatWeDo } from "./(components)/WhatWeDo";
import { WhatWeOffer } from "./(components)/WhatWeOffer";

export default function Home() {
  return (
    // <div className="w-full mx-auto">
    <>
      <Hero />
      <ShowReel />
      <WhatWeOffer />
      <LatestWorks />
      <InfoSection />
      <WhatWeDo />
      <Packages />
      <Testmionials />
    </>
    // </div>
  );
}
