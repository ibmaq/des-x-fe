"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../reusable-components/Button";
import { TrustedBy } from "./TrustedBy";

export const ShowReel = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const overlayTimeout = useRef(null);

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
      // Ensure Vimeo is fully loaded before accessing Player
      if (window.Vimeo && window.Vimeo.Player) {
        playerRef.current = new window.Vimeo.Player(videoRef.current, {
          id: 1053367262,
          hash: "905de5956f",
          autoplay: true,
          muted: true,
          background: true,
        });

        playerRef.current.on("play", () => setIsVideoPlaying(true));
        playerRef.current.on("pause", () => setIsVideoPlaying(false));
      } else {
        console.warn("Vimeo Player is not yet available. Retrying...");
        setTimeout(() => setIsScriptLoaded((prev) => !prev), 100); // Retry after 100ms
      }
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, [isScriptLoaded]);

  const handlePlayPause = async () => {
    if (isVideoPlaying === 0) {
      setIsVideoPlaying(true);
      setShowOverlay(false);
      return;
    }
    resetOverlayTimeout();
    if (playerRef.current) {
      try {
        if (isVideoPlaying) {
          await playerRef.current.pause();
        } else {
          await playerRef.current.play();
        }
      } catch (error) {
        console.error("Error controlling video:", error);
      }
    }
  };

  const resetOverlayTimeout = () => {
    setShowOverlay(true);
    if (overlayTimeout.current) clearTimeout(overlayTimeout.current);

    overlayTimeout.current = setTimeout(() => {
      setShowOverlay(false);
    }, 1000);
  };

  return (
    <div
      className="w-full flex justify-center"
      onMouseMove={resetOverlayTimeout}
    >
      <div className="w-full max-w-[343px] c-md:max-w-[656px] lg:max-w-[768px] 2xl:max-w-[1152px] pt-[193px] c-md:pt-[369px] lg:pt-[768px] 2xl:pt-[648px] relative">
        <iframe
          ref={videoRef}
          src="https://player.vimeo.com/video/1053367262?h=905de5956f&background=1&controls=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute top-0 left-0 w-full h-full"
          title="Des-X Design Showreel"
        />

        <div
          className={`absolute inset-0 flex justify-center items-center bg-black/60 transition-opacity duration-500 ${
            showOverlay ? "opacity-100" : "opacity-0"
          }`}
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={resetOverlayTimeout}
          onClick={handlePlayPause}
        >
          <Button
            text={isVideoPlaying ? "Pause video" : "See how we roll"}
            icon={isVideoPlaying ? "pause" : "play"}
            theme={"primary"}
            onClick={handlePlayPause}
          />
        </div>
      </div>
    </div>
  );
};
