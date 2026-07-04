import { BRAND } from "@/data/menuData";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden px-6 pt-32 pb-24">
      {/* Warm ambient glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(226,132,44,0.15),transparent),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(201,162,75,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold text-center">
          Foodgies Corner
        </p>
        <h1 className="mt-2 text-center font-display text-4xl text-fg-cream md:text-5xl">
          Our Story
        </h1>

        <div className="mt-10 space-y-5 text-sm leading-relaxed text-fg-cream/80 md:text-base">
          <p>
            Foodgies Corner opened its doors in November 2025 with one simple
            idea: good food shouldn&apos;t be rushed, and fast food
            shouldn&apos;t mean forgettable food. What started as a small
            corner kitchen quickly became a favorite stop for anyone craving
            a burger stacked with intention, a shawarma wrapped tight and
            fresh, or fries loaded until the plate can barely hold them.
          </p>
          <p>
            Every item on our menu is made to order — no shortcuts, no
            sitting under a heat lamp waiting to be forgotten. From our
            house-blended sauces to the way we layer every wrap, we treat
            fast food the way it deserves to be treated: with care,
            consistency, and a little bit of flair.
          </p>
          <p>
            Our promise is simple — healthy meal, healthy me. Fresh
            ingredients, honest portions, and flavor worth pausing for. Big
            taste, small pause — that&apos;s the whole idea.
          </p>
        </div>

        {/* Hours card */}
        <div className="mt-14 rounded-2xl border border-fg-gold/20 bg-fg-emerald/30 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Hours</p>
          <div className="mt-4 space-y-2 text-sm text-fg-cream/80">
            {Object.entries(BRAND.hours).map(([day, time]) => (
              <div key={day} className="flex justify-between border-b border-fg-cream/10 pb-2">
                <span>{day}</span>
                <span className="text-fg-cream/60">{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location card */}
        <div className="mt-6 rounded-2xl border border-fg-gold/20 bg-fg-emerald/30 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Find Us</p>
          <a
            href={BRAND.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-fg-cream/80 underline decoration-fg-gold/40 underline-offset-4 transition-colors hover:text-fg-gold"
          >
            {BRAND.address}
          </a>
        </div>
      </div>
    </main>
  );
}