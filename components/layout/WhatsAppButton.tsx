"use client";

import { MessageCircle } from "lucide-react";
import { BRAND } from "@/data/menuData";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I'd like to place an order at Foodgies Corner.");
  const link = `https://wa.me/${BRAND.whatsappNumber}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fg-gold text-fg-black shadow-lg shadow-black/30 transition-transform hover:scale-110"
      aria-label="Order on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-fg-gold animate-ping opacity-30" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}