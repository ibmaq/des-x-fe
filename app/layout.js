import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import LayoutWraper from "./LayoutWrapper";
import HotjarTracker from "./reusable-components/HotJarScript";

const bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

// export const metadata = {
//   title:
//     "DesX Design - Premium UX/UI Design for Startups | Convert & Scale Faster",
//   description:
//     "DesX Design helps startups ship faster, convert better, and raise more with high-impact UX/UI design. No templates — just tailored solutions that drive results. Partner with us for intuitive, scalable, and investor-ready designs.",
// };

export const metadata = {
  title:
    "DesX Design - Premium UX/UI Design for Startups | Convert & Scale Faster",
  description:
    "DesX Design helps startups ship faster, convert better, and raise more with high-impact UX/UI design. No templates — just tailored solutions that drive results. Partner with us for intuitive, scalable, and investor-ready designs.",

  openGraph: {
    title: "DesX Design - Premium UX/UI Design for Startups",
    description:
      "DesX Design helps startups ship faster, convert better, and raise more with high-impact UX/UI design.",
    url: "https://desx.design",
    siteName: "DesX Design",
    images: [
      {
        url: "https://desx.design/images/logo.png",
        width: 800,
        height: 600,
        alt: "DesX Design Logo",
      },
    ],
    type: "website",
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DesX Design",
      alternateName: [
        "DesXDesign",
        "desxdesign",
        "DESXDESIGN",
        "Des X Design",
        "des x design",
        "DES X DESIGN",
        "DesXDesigns",
        "desxdesigns",
        "DESXDESIGNS",
        "DesX Designs",
      ],
      url: "https://desx.design",
      logo: "https://desx.design/images/logo.png",
      description:
        "DesX Design helps startups ship faster, convert better, and raise more with high-impact UX/UI design. No templates — just tailored solutions that drive results.",
      sameAs: [
        "https://www.instagram.com/desxdesign",
        "https://www.linkedin.com/company/des-x-solutions",
      ],
    }),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} antialiased cursor-default`}>
        <LayoutWraper>{children}</LayoutWraper>
        <HotjarTracker />
      </body>
    </html>
  );
}
