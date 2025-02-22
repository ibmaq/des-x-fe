"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../reusable-components/Button";

export const ShowReel = () => {
  const videoARef = useRef(null);
  const playerARef = useRef(null);
  const videoBRef = useRef(null);
  const playerBRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const scriptUrl = "https://player.vimeo.com/api/player.js";
    if (!document.querySelector(`script[src='${scriptUrl}']`)) {
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
    if (isScriptLoaded) {
      if (videoARef.current) {
        playerARef.current = new window.Vimeo.Player(videoARef.current, {
          id: 1053367262,
          hash: "905de5956f",
          autoplay: true,
          muted: true,
          loop: true,
          background: true,
        });
      }
    }

    return () => {
      playerARef.current?.destroy();
      playerBRef.current?.destroy();
    };
  }, [isScriptLoaded]);

  const handlePlayFullscreen = async () => {
    if (playerARef.current) await playerARef.current.pause();

    if (videoBRef.current) {
      if (!playerBRef.current) {
        playerBRef.current = new window.Vimeo.Player(videoBRef.current, {
          id: 1053367262,
          hash: "905de5956f",
          autoplay: false,
          controls: true,
          muted: true,
        });

        playerBRef.current.on("loaded", async () => {
          try {
            await playerBRef.current.requestFullscreen();
            await playerBRef.current.play();
            setTimeout(async () => {
              await playerBRef.current.setVolume(1);
            }, 500);
          } catch (error) {
            console.error("Error playing video B:", error);
          }
        });

        playerBRef.current.on("fullscreenchange", async ({ fullscreen }) => {
          setIsFullscreen(fullscreen);
          if (!fullscreen) {
            await playerBRef.current.pause();
            await playerBRef.current.setCurrentTime(0);

            if (playerARef.current) await playerARef.current.play();
          }
        });
      } else {
        try {
          await playerBRef.current.requestFullscreen();
          await playerBRef.current.play();
          setTimeout(async () => {
            await playerBRef.current.setVolume(1);
          }, 500);
        } catch (error) {
          console.error("Error entering fullscreen:", error);
        }
      }
    } else {
      console.warn("videoBRef.current is null, skipping initialization!");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div
          className="w-full max-w-[343px] c-md:max-w-[656px] lg:max-w-[768px] 2xl:max-w-[1152px] pt-[193px] c-md:pt-[369px] lg:pt-[768px] 2xl:pt-[648px] relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => {
            setIsHovering(true);
            setTimeout(() => setIsHovering(false), 2000);
          }}
        >
          <iframe
            ref={videoARef}
            src="https://player.vimeo.com/video/1053367262?h=905de5956f&autoplay=1&muted=1&loop=1&background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full rounded-xl border border-c-white/30 object-fill max-lg:pointer-events-none"
            title="Showreel (Autoplay)"
          />
          <iframe
            ref={videoBRef}
            src="https://player.vimeo.com/video/1053367262?h=905de5956f"
            allow="autoplay; fullscreen; picture-in-picture"
            className={`absolute top-0 left-0 w-full h-full ${
              isFullscreen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            title="Showreel (Fullscreen)"
          />

          {isHovering && !isFullscreen && (
            <div className="absolute inset-0 flex justify-center items-center bg-black/60 px-5">
              <Button
                text="See how we roll"
                icon="play"
                theme="primary"
                onClick={handlePlayFullscreen}
                className="absolute transition-transform duration-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
