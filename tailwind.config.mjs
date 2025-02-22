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
        "4xl": "2560px",
        "5xl": "3840px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5647FF",
        "c-white": "#FCFFF4",
        "c-white-2": "#E5E7EB",
        "c-black": "#1A1A1A",
        "c-black-2": "#0F0F0F",
        "c-blue": "#7C70FF",
        "c-gray-1": "#1F2A37",
        "c-hr": "#282729",
      },
      opacity: {
        8: "8%",
        12: "12%",
      },
      fontFamily: {
        bebas: "var(--font-bebas-neue)",
      },
      fontSize: {
        4.8: "1.2rem", // 19.2px
        6.5: "1.625rem", // 26px
        7: "1.75rem", // 28px
        10: "2.5rem", // 40px
        10.5: "2.625rem", // 42px
        13.5: "3.375rem", // 54px
        14: "3.5rem", // 56px
        58: "3.625rem", // 58px
        15: "3.75rem", // 60px
        15.5: "3.875rem", // 62px
        16.5: "4.125rem", // 66px
        17: "4.25rem", // 68px
        18.5: "4.625rem", // 74px
        20: "5rem", // 80px
        22.5: "5.625rem", // 90px
        25: "6.25rem", // 100px
        27.5: "6.875rem", // 110px
        28.5: "7.125rem", // 114px
        29: "7.25rem", // 116px
        30: "7.5rem", // 120px
        35: "8.75rem", // 140px
        36.5: "9.125rem", // 146px
        41.5: "10.375rem", // 166px
        48: "12rem", // 192px
        49: "12.25rem", // 196px
        82.5: "20.625rem", // 330px
        366: "22.875rem", // 366px
        "hero-heading-md": "10.375rem", // 166px
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
        3: "3px",
        5: "5px",
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
        6.5: "1.625rem", // 26px
        6.75: "1.6875rem", // 27px
        9.5: "2.375rem", // 38px
        15: "3.75rem", // 60px
        21.5: "5.375rem", // 86px
        22.5: "5.625rem", // 90px
        25: "6.25rem", // 100px
        28.5: "7.125rem", // 114px
        30: "7.5rem", // 120px
      },
      width: {
        12.5: "3.125rem", // 50px
        22.5: "5.625rem", // 90px
        216: "54rem", // 864px
        61: "15.25rem", // 244px
        95: "380px",
        106: "424px",
      },
      maxWidth: {
        90: "22.5rem", // 360px
        105.5: "26.375rem", // 422px
        113.5: "28.375rem", // 454px
        145: "36.25rem", // 580px
        147: "36.75rem", // 588px
        182: "45.5rem", // 728px
        647: "40.4375rem", // 647px
        216: "54rem", // 864px
      },
      height: {
        12.5: "3.125rem", // 50px
        22: "5.5rem", // 88px
        22.5: "5.625rem", // 90px
        83.25: "20.8125rem", // 333px
        107.5: "26.875rem", // 430px
      },
      maxHeight: {
        121.75: "30.4375rem", // 487px
      },
      borderRadius: {
        1: "0.25rem", // 4px
        2.5: "0.625rem", // 10px
        3.5: "0.875rem", // 14px
        8: "2rem", // 32px
        9.6: "0.6rem", // 9.6px
        12: "3rem", // 48px
      },
      backdropBlur: {
        10: "10px",
      },
      padding: {
        4.5: "1.125rem", // 18px
        15: "3.75rem", // 60px
        22.875: "5.71875rem", // 91.5px
        30: "7.5rem", // 120px
        33.75: "8.4375rem", // 135px
        35: "8.75rem", // 140px
        42.25: "10.5625rem", // 169px
        "section-2xl": "11.125rem", // 178px
      },
      margin: {
        22.875: "5.71875rem", // 91.5px
      },
      spacing: {
        16.4: "4.1rem", // 65.6px
        20.25: "5.0625rem", // 81px
        46: "11.25rem", // 180px
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
