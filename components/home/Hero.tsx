"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BRAND } from "@/data/menuData";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to place an order at Foodgies Corner."
  );

  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-burger-fries.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-fg-black/60 via-fg-black/30 to-fg-emerald-deep/80" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-fg-gold sm:mb-4 sm:text-xs">
          Foodgies Corner
        </p>

        <h1 className="font-display text-3xl leading-tight text-fg-cream sm:text-5xl md:text-6xl">
          Big Taste.
          <br />
          Small Pause.
        </h1>

        <p className="mt-4 max-w-xs text-sm text-fg-cream/70 sm:mt-6 sm:max-w-md sm:text-base">
          Premium burgers, shawarma, loaded fries & more — crafted fresh,
          served with intention.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
          <Link
            href="/menu"
            className="rounded-full bg-fg-gold px-8 py-3 text-sm font-medium text-fg-black transition-colors hover:bg-fg-gold-light"
          >
            Menu →
          </Link>
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-fg-gold/50 px-8 py-3 text-sm font-medium text-fg-cream transition-colors hover:border-fg-gold hover:text-fg-gold"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce sm:bottom-8">
        <ChevronDown className="text-fg-gold/70" size={24} />
      </div>
    </section>
  );
}