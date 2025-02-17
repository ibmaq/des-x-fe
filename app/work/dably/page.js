import DablyIcon from "@/public/utils/Icons";
import HeaderSection from "./(components)/HeaderSection";
import MobileWallet from "./(components)/MobileWallet";
import Portal from "./(components)/Portal";
import PreciousMetals from "./(components)/PreciousMetals";
import UserInterface from "./(components)/UserInterface";
import UserStories from "./(components)/UserStories";
import WireFrames from "./(components)/WireFrames";

export default function Page() {
  return (
    <>
      <HeaderSection heading={"Dab:ly"}>
        <span className="*:max-md:size-44">
          <DablyIcon />
        </span>
      </HeaderSection>
      <div className="flex flex-col gap-20 lg:py-30 py-10 md:py-20">
        <PreciousMetals />
        <UserStories />
        <WireFrames />
        <UserInterface />
        <div>
          <Portal />
          <MobileWallet />
        </div>
      </div>
    </>
  );
}
