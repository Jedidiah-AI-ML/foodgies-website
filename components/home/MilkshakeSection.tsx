"use client";

import { useEffect, useRef, useState } from "react";
import { menuData } from "@/data/menuData";
import FlavorCard from "@/components/shared/FlavorCard";

export default function MilkshakeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const milkshakes = menuData.find((cat) => cat.key === "milkshakes");

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only reveal once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!milkshakes) return null;

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      {/* TODO: video currently being generated — swap poster-only div for <video> once ready */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/milkshake.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-fg-black/70 via-fg-black/50 to-fg-emerald-deep/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Sip Slowly</p>
        <h2 className="mt-2 font-display text-3xl text-fg-cream md:text-4xl">
          Milkshakes, Thick & Cold
        </h2>
        <p className="mt-3 max-w-md text-sm text-fg-cream/70">
          Rich, creamy, and blended fresh — the perfect pause.
        </p>

        <div
          className={`mt-10 flex gap-5 overflow-x-auto pb-4 scrollbar-hide transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {milkshakes.items.map((item) => (
            <FlavorCard key={item.id} item={item} variant="glass" imageSrc={item.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}