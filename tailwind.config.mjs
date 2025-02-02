// ====================//
// IMPORTANT NOTE!     //
// "c-" is for CUSTOM  //
// ====================//

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
        "c-sm": "425px",
        "c-md": "720px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5647FF",
        "c-white": "#FCFFF4",
        "c-black": "#1A1A1A",
        "c-black-2": "#0F0F0F",
        "c-blue": "#7C70FF",
        "c-gray-1": "#1F2A37",
        "c-hr": "#282729",
      },
      opacity: {
        8: "8%",
      },
      fontFamily: {
        bebas: "var(--font-bebas-neue)",
      },
      fontSize: {
        4.8: "19.2px",
        6.5: "26px",
        10: "40px",
        10.5: "42px",
        13.5: "54px",
        14: "56px",
        58: "58px",
        15.5: "62px",
        17: "68px",
        18.5: "74px",
        20: "80px",
        27.5: "110px",
        28.5: "114px",
        29: "116px",
        30: "120px",
        36.5: "146px",
        41.5: "166px",
        48: "192px",
        49: "196px",
        82.5: "330px",
        366: "366px",
        "hero-heading-md": "166px",
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
        2: "2px",
      },
      lineHeight: {
        0.8: "80%",
        0.9: "90%",
        0.92: "92%",
        0.94: "94%",
        1.2: "120%",
        1.4: "140%",
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
        12.5: "50px",
        22.5: "90px",
        216: "864px",
        61: "244px",
      },
      maxWidth: {
        105.5: "422px",
        113.5: "454px",
        147: "588px",
        182: "728px",
        647: "647px",
        216: "864px",
      },
      height: {
        12.5: "50px",
        22.5: "90px",
        83.25: "333px",
        107.5: "430px",
      },
      maxHeight: {
        121.75: "487px",
      },
      borderRadius: {
        1: "4px",
        2.5: "10px",
        3.5: "14px",
        8: "32px",
        9.6: "9.6px",
        12: "48px",
      },
      backdropBlur: {
        10: "10px",
      },
      padding: {
        4.5: "18px",
        15: "60px",
        30: "120px",
        33.75: "135px",
        35: "140px",
        "section-2xl": "178px",
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
