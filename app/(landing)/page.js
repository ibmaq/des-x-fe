import { Hero } from "./(components)/Hero";
import { InfoSection } from "./(components)/InfoSection";
import { LatestWorks } from "./(components)/LatestWorks";
import { ShowReel } from "./(components)/ShowReel";
import { Testmionials } from "./(components)/Testmionials";
import { WhatWeOffer } from "./(components)/WhatWeOffer";

export default function Home() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <Hero />
      <ShowReel />
      <InfoSection />
      <LatestWorks />
      <WhatWeOffer />
      <Testmionials />
    </div>
  );
}
