/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "c-md": "720px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5647FF",
        "cust-white": "#FCFFF4", //cust is for custom
        "cust-black": "#1A1A1A",
        "cust-blue": "#7C70FF",
        "cust-gray-1": "#1F2A37",
      },
      opacity: {
        8: "8%",
      },
      fontFamily: {
        bebas: "var(--font-bebas-neue)",
      },
      fontSize: {
        4.8: "clamp(12px, 2vw + 8px, 19.2px)",
        6.5: "clamp(16px, 2vw + 10px, 26px)",
        10: "clamp(24px, 3vw + 12px, 40px)",
        13.5: "54px",
        14: "clamp(32px, 4vw + 14px, 56px)",
        58: "clamp(40px, 5vw + 10px, 58px)",
        15.5: "62px",
        17: "clamp(38px, 5.5vw + 12px, 68px)",
        18.5: "clamp(42px, 6vw + 12px, 74px)",
        29: "clamp(60px, 7vw + 16px, 116px)",
        30: "clamp(64px, 7.5vw + 16px, 120px)",
        36.5: "clamp(70px, 8vw + 16px, 146px)",
        41.5: "clamp(74px, 9vw + 16px, 166px)",
        48: "clamp(96px, 10vw + 16px, 192px)",
        49: "clamp(98px, 10vw + 18px, 196px)",
        82.5: "clamp(165px, 12vw + 20px, 330px)",
        366: "clamp(183px, 15vw + 33px, 366px)",
        "hero-heading-md": "clamp(116px,   ,166px)",
      },
      letterSpacing: {
        0.19: "0.19200000166893005px",
        1.15: "1.1519999504089355px",
        2.38: "2.3774209022521973px",
        2.38: "2.3774209022521973px",
        2.88: "2.880000114440918px",
        3.84: "3.8399999141693115px",
        5.04: "5.04px",
        9.41: "9.407999992370605px",
        3.84: "3.84px",
        1: "1px",
        1.15: "1.15px",
      },
      lineHeight: {
        0.8: "80%",
        0.9: "90%",
        0.92: "92%",
        1.2: "120%",
        172: "172px",
        52: "52px",
      },
      gap: {
        6.75: "27px",
        9.5: "38px",
        15: "60px",
        6.5: "26px",
        25: "100px",
        30: "120px",
      },
      width: {
        216: "864px",
        61: "244px",
      },
      maxWidth: {
        105.5: "422px",
        182: "728px",
        647: "647px",
        216: "864px",
      },
      maxHeight: {
        121.75: "487px",
      },
      borderRadius: {
        2.5: "10px",
        8: "32px",
        9.6: "9.6px",
        12: "48px",
      },
      backdropBlur: {
        10: "10px",
      },
      padding: {
        "section-2xl": "178px",
        30: "120px",
      },
      spacing: {
        46: "180px",
        20.25: "81px",
      },
      zIndex: {
        1: 1,
        2: 2,
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.6) 46.5%, #1A1A1A 100%)",
      },
    },
  },
  plugins: [],
};
