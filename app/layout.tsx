import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Preloader from "@/components/layout/Preloader";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-raw",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-raw",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Foodgies Corner",
  description: "Big taste, small pause. Premium burgers, shawarma, loaded fries & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} font-body text-fg-cream antialiased`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}