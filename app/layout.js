import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Footer } from "./reusable-components/Footer";

const bebas = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "DES X",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
