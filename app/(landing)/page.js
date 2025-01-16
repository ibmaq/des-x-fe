import { Hero } from "./(components)/Hero";
import { InfoSection } from "./(components)/InfoSection";
import { LatestWorks } from "./(components)/LatestWorks";
import { ShowReel } from "./(components)/ShowReel";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowReel />
      <InfoSection />
      <LatestWorks />
    </>
  );
}
