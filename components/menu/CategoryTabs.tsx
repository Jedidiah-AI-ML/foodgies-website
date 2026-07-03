"use client";

import { useEffect, useState } from "react";
import { MenuCategoryData } from "@/data/menuData";

export default function CategoryTabs({ categories }: { categories: MenuCategoryData[] }) {
    const [activeKey, setActiveKey] = useState<string>(categories[0]?.key ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveKey(entry.target.id);
          }
        });
      },
      { rootMargin: "-140px 0px -60% 0px" } // triggers when a section is near the top, under the sticky bar
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.key);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  const handleClick = (key: string) => {
    const el = document.getElementById(key);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-[64px] z-40 border-y border-fg-gold/10 bg-fg-emerald-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl gap-6 overflow-x-auto px-6 py-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleClick(cat.key)}
            className={`whitespace-nowrap text-sm transition-colors ${
              activeKey === cat.key
                ? "text-fg-gold font-medium"
                : "text-fg-cream/60 hover:text-fg-cream"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}