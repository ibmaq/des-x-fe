"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../reusable-components/Button";
import Image from "next/image";

export const ShowReel = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const scriptUrl = "https://player.vimeo.com/api/player.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => setIsScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isScriptLoaded && videoRef.current) {
      playerRef.current = new window.Vimeo.Player(videoRef.current, {
        id: 1053367262,
        hash: "905de5956f",
        autoplay: false,
        background: false,
      });

      playerRef.current.on("fullscreenchange", ({ fullscreen }) => {
        if (!fullscreen) {
          playerRef.current.pause();
          setIsPlaying(false);
        }
      });
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [isScriptLoaded]);

  const handlePlay = async () => {
    console.log("test"); // Ensure function is triggered
    if (playerRef.current) {
      console.log("test2"); // Ensure playerRef is assigned
      try {
        await playerRef.current.play();
        await playerRef.current.requestFullscreen();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error starting video:", error);
      }
    }
  };

  return (
    <div className="w-full flex justify-center">
      {/* <div className="w-full max-w-[343px] c-md:max-w-[656px] lg:max-w-[768px] 2xl:max-w-[1152px] pt-[193px] c-md:pt-[369px] lg:pt-[768px] 2xl:pt-[648px] relative"> */}
      <div className="w-full max-w-[343px] c-md:max-w-[656px] lg:max-w-[768px] 2xl:max-w-[1152px] pt-[481px] 2xl:pt-[866px] relative">
        <Image
          src="/images/showreel_thumb.webp"
          alt="Showreel Thumbnail"
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 object-cover rounded-xl border border-c-white/30 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
          width={1920}
          height={1080}
        />

        <iframe
          ref={videoRef}
          src="https://player.vimeo.com/video/1053367262?h=905de5956f&autoplay=0&controls=1"
          allow="autoplay; fullscreen; picture-in-picture"
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          title="Des-X Design Showreel"
        />

        {!isPlaying && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/60 px-5">
            <Button
              text="See how we roll"
              icon="play"
              theme="primary"
              onClick={handlePlay}
              className="absolute transition-transform duration-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        )}
      </div>
    </div>
  );
};
