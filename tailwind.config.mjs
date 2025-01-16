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
      },
      fontFamily: {
        bebas: "var(--font-bebas-neue)",
      },
      fontSize: {
        29: "116px",
        48: "192px",
        49: "196px",
        82.5: "330px",
      },
      letterSpacing: {
        0.19: "0.19200000166893005px",
        2.38: "2.3774209022521973px",
        5.04: "5.04px",
        9.41: "9.407999992370605px",
      },
      lineHeight: {
        0.92: "92%",
      },
      gap: {
        6.75: "27px",
      },
      maxWidth: {
        105.5: "422px",
        182: "728px",
      },
      borderRadius: {
        2.5: "10px",
        8: "32px",
        12: "48px",
      },
      backdropBlur: {
        10: "10px",
      },
      padding: {
        "section-2xl": "178px",
        30: "120px",
      },
    },
  },
  plugins: [],
};
