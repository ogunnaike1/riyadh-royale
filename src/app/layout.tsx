import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aurélia Parfums | Crafted Scents for Timeless Elegance",
  description:
    "A curated collection of rare essences, composed for those who wear elegance as a signature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${manrope.variable}`}
    >
      <body className="overflow-x-hidden bg-cream font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
