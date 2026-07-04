import { menuData } from "@/data/menuData";
import FlavorCard from "@/components/shared/FlavorCard";

export default function ShawarmaSection() {
  const shawarma = menuData.find((cat) => cat.key === "shawarma");

  if (!shawarma) return null;

  return (
    <section className="relative overflow-hidden py-24">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/shawarma.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay so the glass cards + text stay legible over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-fg-black/70 via-fg-black/50 to-fg-emerald-deep/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Wrapped Fresh</p>
        <h2 className="mt-2 font-display text-3xl text-fg-cream md:text-4xl">
          Shawarma, Rolled Right
        </h2>
        <p className="mt-3 max-w-md text-sm text-fg-cream/70">
          Layers of seasoned protein, sauce, and crunch — wrapped tight, every time.
        </p>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {shawarma.items.map((item) => (
            <FlavorCard key={item.id} item={item} variant="glass" imageSrc={item.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}