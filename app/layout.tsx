import type { Metadata } from "next";
import { Josefin_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const josefin_sans = Josefin_Sans({ subsets: ["latin"], variable: "--font-josefin" });
const dancing_script = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" });

export const metadata: Metadata = {
  title: "Muhammad Ali Imran | Portfolio",
  description: "Portfolio of Muhammad Ali Imran. A software engineer, web developer, and open-source contributor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin_sans.variable} ${dancing_script.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
