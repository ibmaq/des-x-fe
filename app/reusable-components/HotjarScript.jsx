"use client";
import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

// Create a reusable hook for conversion tracking
export function useHotjar() {
  const trackConversion = (eventName, properties = {}) => {
    if (typeof window !== "undefined" && window.hj) {
      window.hj("event", eventName, properties);
      console.log(`[Hotjar] Tracked: ${eventName}`, properties);
    }
  };
  return { trackConversion };
}

export default function HotjarTracker() {
  const pathname = usePathname();
  const { trackConversion } = useHotjar();

  useEffect(() => {
    trackConversion(`page_view_${pathname.replace(/\//g, "_")}`);
  }, [pathname]);

  return (
    <Script
      id="hotjar-tracker"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:${process.env.NEXT_PUBLIC_HOTJAR_VERSION}};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  );
}
