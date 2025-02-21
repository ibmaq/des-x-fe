import DablyIcon from "@/public/utils/Icons";
import HeaderSection from "./(components)/HeaderSection";
import MobileWallet from "./(components)/MobileWallet";
import Portal from "./(components)/Portal";
import PreciousMetals from "./(components)/PreciousMetals";
import UserInterface from "./(components)/UserInterface";
import UserStories from "./(components)/UserStories";
import WireFrames from "./(components)/WireFrames";
import { Button } from "@/app/reusable-components/Button";

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
      <div className="sticky bottom-6 text-red-900 mx-auto w-full flex justify-center items-center z-10 max-md:px-4">
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
