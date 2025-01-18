import { Button } from "../../reusable-components/Button";

export const ShowReel = () => {
  return (
    <div className="flex items-center justify-center lg:py-30 max-sm:px-4">
      <div className="w-full max-w-6xl object-contain relative">
        {/* <video autoPlay loop muted className="w-full h-full object-contain"> */}
        <video autoPlay loop muted className="mx-auto">
          <source
            src="https://uploads-ssl.webflow.com/655b3d9644c731751d03fd3a/655dde8b0bb6c14bc53381f5_linear-overview-transcode.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-cust-black/60 flex justify-center items-center">
          <Button
            text={"Watch the full showreel"}
            icon={"play"}
            theme={"primary"}
          />
        </div>
      </div>
    </div>
  );
};
