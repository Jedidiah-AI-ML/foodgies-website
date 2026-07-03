import { menuData } from "@/data/menuData";
import CategoryMenuBlock from "@/components/shared/CategoryMenuBlock";
import CategoryTabs from "@/components/menu/CategoryTabs";

export default function MenuPage() {
  return (
    <main className="relative pb-24">
      {/* Ambient background video — fixed, subtle, blurred */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full scale-110 object-cover opacity-15 blur-sm"
          src="/videos/menu-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-fg-emerald-deep/60" />
      </div>

      <div className="px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-fg-gold text-center">
            Foodgies Corner
          </p>
          <h1 className="mt-2 text-center font-display text-4xl text-fg-cream md:text-5xl">
            Full Menu
          </h1>
        </div>
      </div>

      <CategoryTabs categories={menuData} />

      <div className="px-6 pt-10">
        <div className="mx-auto max-w-5xl space-y-5">
          {menuData.map((category) => (
            <div key={category.key} id={category.key} className="scroll-mt-32">
              <CategoryMenuBlock category={category} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}