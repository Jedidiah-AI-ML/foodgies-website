"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/data/menuData";

// ... keep InstagramIcon and TikTokIcon functions as they are ...

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-fg-emerald-deep/90 backdrop-blur-md py-2 shadow-lg shadow-black/20"
            : "bg-transparent py-3"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link href="/" className="relative block h-14 w-14 flex-shrink-0 sm:h-16 sm:w-16">
            <Image
              src="/images/logoo.png"
              alt="Foodgies Corner"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm text-fg-cream/90 hover:text-fg-gold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-fg-cream/90 hover:text-fg-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-fg-cream/90 hover:text-fg-gold transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              className="rounded-full bg-fg-gold px-5 py-2 text-sm font-medium text-fg-black transition-colors hover:bg-fg-gold-light"
            >
              Menu →
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-fg-cream md:hidden"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* ... keep the mobile drawer exactly as it is ... */}
    </>
  );
}