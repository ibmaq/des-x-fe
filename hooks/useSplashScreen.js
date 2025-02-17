"use client";

import { useState, useEffect } from "react";

export default function useSplashScreen() {
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  useEffect(() => {
    const storedValue = sessionStorage.getItem("hasSeenSplash");
    if (storedValue === null) {
      sessionStorage.setItem("hasSeenSplash", "false");
      setHasSeenSplash(false);
    } else {
      setHasSeenSplash(storedValue === "true");
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasSeenSplash");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem("hasSeenSplash", hasSeenSplash.toString());
  }, [hasSeenSplash]);

  return { hasSeenSplash, setHasSeenSplash };
}
