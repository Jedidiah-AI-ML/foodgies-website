import { menuData } from "@/data/menuData";
import FlavorCard from "@/components/shared/FlavorCard";

export default function FriesSection() {
  const fries = menuData.find((cat) => cat.key === "loaded-fries");

  if (!fries) return null;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/loaded-fries.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay so the glass cards + text stay legible over busy footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-fg-black/70 via-fg-black/50 to-fg-emerald-deep/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Loaded & Stacked</p>
        <h2 className="mt-2 font-display text-3xl text-fg-cream md:text-4xl">
          Loaded Fries
        </h2>
        <p className="mt-3 max-w-md text-sm text-fg-cream/70">
          Crisp fries buried in sauce, protein, and everything in between.
        </p>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {fries.items.map((item) => (
            <FlavorCard key={item.id} item={item} variant="glass" />
          ))}
        </div>
      </div>
    </section>
  );
}