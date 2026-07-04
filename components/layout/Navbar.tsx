"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/data/menuData";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

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

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-fg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-fg-emerald-deep px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg text-fg-gold">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-fg-cream"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-fg-cream/90 hover:bg-fg-gold/10 hover:text-fg-gold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/menu"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-fg-cream/90 hover:bg-fg-gold/10 hover:text-fg-gold transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-fg-cream/90 hover:bg-fg-gold/10 hover:text-fg-gold transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-fg-cream/90 hover:bg-fg-gold/10 hover:text-fg-gold transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <div className="my-6 border-t border-fg-gold/30" />

            <div className="flex flex-col gap-4">
              <a
                href={BRAND.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 text-sm text-fg-cream/70 hover:text-fg-gold transition-colors"
              >
                📍 {BRAND.address}
              </a>

              <div className="flex items-center gap-5 px-3">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-fg-cream/70 hover:text-fg-gold transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={BRAND.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-fg-cream/70 hover:text-fg-gold transition-colors"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <p className="text-xs uppercase tracking-widest text-fg-gold/70 px-3">Hours</p>
              <div className="mt-2 space-y-1 px-3">
                {Object.entries(BRAND.hours).map(([day, time]) => (
                  <p key={day} className="text-xs text-fg-cream/50">
                    {day}: {time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}