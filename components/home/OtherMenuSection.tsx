import { menuData } from "@/data/menuData";
import FlavorCard from "@/components/shared/FlavorCard";

const HOMEPAGE_OTHER_CATEGORIES = ["pasta-noodles", "rice-meals", "proteins"];

export default function OtherMenuSection() {
  const categories = menuData.filter((cat) =>
    HOMEPAGE_OTHER_CATEGORIES.includes(cat.key)
  );

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-fg-gold">More on the Menu</p>
        <h2 className="mt-2 font-display text-3xl text-fg-cream md:text-4xl">
          Everything Else, Made Fresh
        </h2>
        <p className="mt-3 max-w-md text-sm text-fg-cream/60">
          Pastas, rice & proteins — every plate made to order.
        </p>

        <div className="mt-12 space-y-14">
          {categories.map((category) => (
            <div key={category.key}>
              <h3 className="font-display text-xl text-fg-gold">{category.label}</h3>
              <div className="mt-5 flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
                {category.items.map((item) => (<FlavorCard key={item.id} item={item} imageSrc={item.imageSrc} />))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}