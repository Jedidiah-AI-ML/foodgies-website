"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("fg-preloader-shown");
    if (alreadyShown) {
      setIsDone(true);
      return;
    }

    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("fg-preloader-shown", "true");
      setTimeout(() => setIsDone(true), 500); // wait for fade-out transition
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-fg-emerald-deep transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="font-display text-2xl tracking-widest text-fg-gold animate-pulse">
        FOODGIES CORNER
      </p>
    </div>
  );
}