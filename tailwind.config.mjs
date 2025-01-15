/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bebas: "var(--font-bebas-neue)",
      },
      fontSize: {
        48: "192px",
        49: "196px",
      },
      letterSpacing: {
        5.04: "5.04px",
      },
    },
  },
  plugins: [],
};
