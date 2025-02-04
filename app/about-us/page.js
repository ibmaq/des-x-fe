import { ServicesOffered } from "../reusable-components/ServicesOffered";
import { Hero } from "./(components)/Hero";
import { LatestWorks } from "./(components)/LatestWorks";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <LatestWorks />
      <ServicesOffered />
    </div>
  );
}
