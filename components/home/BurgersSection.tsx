import { menuData } from "@/data/menuData";
import FlavorCard from "@/components/shared/FlavorCard";

export default function BurgersSection() {
  const burgers = menuData.find((cat) => cat.key === "burgers");

  if (!burgers) return null;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">Signature</p>
        <h2 className="mt-2 font-display text-3xl text-fg-cream md:text-4xl">
          Burgers Worth the Bite
        </h2>
        <p className="mt-3 max-w-md text-sm text-fg-cream/60">
          Stacked, seared, and served hot, Every bite calls for more.
        </p>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
          {burgers.items.map((item) => (
            <FlavorCard key={item.id} item={item} imageSrc={item.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}