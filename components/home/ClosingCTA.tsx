import Link from "next/link";
import { BRAND } from "@/data/menuData";

export default function ClosingCTA() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to place an order at Foodgies Corner."
  );

  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Ambient glow, no video — this is the calm closing beat */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,162,75,0.15),transparent)]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Foodgies Corner</p>
        <h2 className="mt-3 font-display text-3xl text-fg-cream md:text-5xl">
          Big Taste. Small Pause.
        </h2>
        <p className="mt-4 text-sm text-fg-cream/60 md:text-base">
          Every plate made fresh, every order worth the wait.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-full bg-fg-gold px-8 py-3 text-sm font-medium text-fg-black transition-colors hover:bg-fg-gold-light"
          >
            View Full Menu →
          </Link>
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-fg-gold/50 px-8 py-3 text-sm font-medium text-fg-cream transition-colors hover:border-fg-gold hover:text-fg-gold"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}