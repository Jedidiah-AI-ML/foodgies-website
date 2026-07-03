"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { formatNaira, MenuCategoryData } from "@/data/menuData";

const INITIAL_VISIBLE_COUNT = 4;

export default function CategoryMenuBlock({ category }: { category: MenuCategoryData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded
    ? category.items
    : category.items.slice(0, INITIAL_VISIBLE_COUNT);

  const hasMore = category.items.length > INITIAL_VISIBLE_COUNT;

  return (
    <div className="rounded-2xl border border-fg-gold/10 bg-fg-emerald/30 p-6">
      <h3 className="font-display text-lg text-fg-gold">{category.label}</h3>

      <ul className="mt-4 space-y-3">
        {visibleItems.map((item) => (
          <li key={item.id} className="flex items-baseline gap-2 text-sm">
            <span className="text-fg-cream/85">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-fg-cream/20 translate-y-[-3px]" />
            <span className="text-fg-cream/70 whitespace-nowrap">
              {formatNaira(item.price)}
            </span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-5 flex items-center gap-1 text-xs uppercase tracking-widest text-fg-gold/80 transition-colors hover:text-fg-gold"
        >
          {isExpanded ? "See Less" : "See More"}
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
}