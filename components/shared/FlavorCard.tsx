"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { formatNaira, getWhatsAppOrderLink, MenuItem } from "@/data/menuData";

interface FlavorCardProps {
  item: MenuItem;
  imageSrc?: string;
  variant?: "solid" | "glass";
}

export default function FlavorCard({ item, imageSrc, variant = "solid" }: FlavorCardProps) {
  const surfaceClasses =
    variant === "glass"
      ? "bg-fg-cream/10 backdrop-blur-md border border-fg-cream/20 hover:border-fg-gold/50"
      : "bg-fg-emerald/40 border border-fg-gold/10 hover:border-fg-gold/40";

  const orderLink = getWhatsAppOrderLink(item.name);

  return (
    <div
      className={`group relative w-[72vw] flex-shrink-0 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-fg-gold/10 sm:w-64 ${surfaceClasses}`}
    >
      {/* Image — tappable, opens WhatsApp order link */}
      <a
        href={orderLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Order ${item.name} on WhatsApp`}
        className="relative block h-48 w-full overflow-hidden bg-fg-emerald-deep/40"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-xs text-fg-cream/30">Image coming soon</span>
          </div>
        )}

        {item.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-fg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest text-fg-gold backdrop-blur-sm">
            {item.tag}
          </span>
        )}
      </a>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${item.name} on WhatsApp`}
            className="font-display text-base text-fg-cream transition-colors hover:text-fg-gold"
          >
            {item.name}
          </a>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${item.name} on WhatsApp`}
            className="mt-1 flex-shrink-0 text-fg-gold/60 transition-colors hover:text-fg-gold"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <p className="mt-1 text-sm text-fg-gold">
          {formatNaira(item.price)}
          {item.isPlaceholder && (
            <span className="ml-2 text-[10px] text-fg-cream/30">(est.)</span>
          )}
        </p>
      </div>
    </div>
  );
}