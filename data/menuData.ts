// src/data/menuData.ts

export type MenuCategory =
  | "burgers"
  | "loaded-fries"
  | "shawarma"
  | "milkshakes"
  | "platters"
  | "pasta-noodles"
  | "rice-meals"
  | "proteins"
  | "sauces-sides";

export interface MenuItem {
  id: string;
  name: string;
  price: number; // stored in Naira, no formatting
  description?: string;
  tag?: string; // e.g. "Best Seller", "Spicy", "Signature"
  isPlaceholder?: boolean; // true = price/item not yet confirmed by client
  imageSrc?: string;
}



export interface MenuCategoryData {
  key: MenuCategory;
  label: string; // display name shown on site
  items: MenuItem[];
}

// ---------------------------------------------
// BRAND CONSTANTS
// ---------------------------------------------
export const BRAND = {
  name: "Foodgies Corner",
  tagline: "Healthy Meal, Healthy Me!",
  whatsappNumber: "2349039959526",
  phoneNumber: "+2349039959526",
  email: "hello@foodgiescorner.com", // ⚠️ placeholder — confirm real email with client
  address: "Arepo Rd, opposite Akogun Plaza, Pakuro 110105, Ogun State",
  mapsLink: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x103b8d35437fd34b:0xc0b4c2928441859b?entry=s&sa=X&ved=2ahUKEwjd6pXL6riVAxVcQ0EAHU27NMcQ4kB6BAgVEAA&hl=en",
  instagram: "https://www.instagram.com/foodgiescorner?igsh=MXJiamcyZnA5OGp0",
  tiktok: "https://vt.tiktok.com/ZSCqtyLDA/",
  hours: {
    "Tuesday – Saturday": "11:00 AM – 9:00 PM",
    Sunday: "3:00 PM – 8:00 PM",
    Monday: "Closed",
  },
};

// ---------------------------------------------
// HELPERS
// ---------------------------------------------

// Formats a number as Nigerian Naira, e.g. 1500 -> "₦1,500"
export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

// Builds a WhatsApp order link pre-filled with the item name
export function getWhatsAppOrderLink(itemName: string): string {
  const message = encodeURIComponent(
    `Hi, I'd like to order ${itemName} from Foodgies Corner.`
  );
  return `https://wa.me/${BRAND.whatsappNumber}?text=${message}`;
}

// ---------------------------------------------
// MENU DATA
// ---------------------------------------------

export const menuData: MenuCategoryData[] = [
  // -----------------------------
  // ⚠️ PLACEHOLDER CATEGORIES
  // Not on the physical paper menu photo provided.
  // Prices below are estimates only — confirm with client before launch.
  // -----------------------------
  {
    key: "burgers",
    label: "Burgers",
    items: [
      {
        id: "burger-smash-beef",
        name: "Smash Beefed Up Burger",
        price: 5000,
        description: "Beef patty, lettuce, caramelized onion & our house cream sauce",
        imageSrc: "/images/menu/burgers/burger-smash-beef.jpg",
      },
      {
        id: "burger-smash-chick-stack",
        name: "Smash Chick Stack Burger",
        price: 5000,
        description: "Chicken fillet, lettuce, caramelized onion & our house cream sauce",
        imageSrc: "/images/menu/burgers/burger-smash-chick-stack.jpg",
      },
      {
        id: "burger-cheese",
        name: "Cheese Burger",
        price: 6000,
        description: "Beef patty, caramelized onion, cheese, house cream sauce & lettuce",
        imageSrc: "/images/menu/burgers/burger-cheese.jpg",
      },
      {
        id: "burger-the-clash",
        name: "The Clash Burger",
        price: 8500,
        tag: "Signature",
        description: "Double patties (beef & chicken), caramelized onion, cheese, lettuce, tomato & house cream sauce",
        imageSrc: "/images/menu/burgers/burger-the-clash.jpg",
      },
      {
        id: "burger-big-boss",
        name: "The Big Boss Burger",
        price: 11000,
        tag: "Best Seller",
        description: "Double beef patty, sunny side up, cheese, premium slaw, sausage & house cream sauce",
        imageSrc: "/images/menu/burgers/burger-big-boss.jpg",
      },
    ],
  },
  {
    key: "loaded-fries",
    label: "Loaded Fries",
    items: [
      {
        id: "fries-loaded-bowl-regular",
        name: "Loaded Fries Bowl",
        price: 8000,
        description: "Crispy fries, spicy sauce, creamy house dressing, veggies, smoked sausage, shredded beef or chicken",
        imageSrc: "/images/menu/loaded-fries/fries-loaded-bowl-regular.jpg",
      },
      {
        id: "fries-loaded-bowl-deluxe",
        name: "Loaded Fries Bowl (with Melted Cheese)",
        price: 10000,
        tag: "Signature",
        description: "Crispy fries, spicy sauce, creamy house dressing, veggies, smoked sausage, shredded beef or chicken, melted cheese",
        imageSrc: "/images/menu/loaded-fries/fries-loaded-bowl-deluxe.jpg",
      },
    ],
  },
  {
    key: "shawarma",
    label: "Shawarma",
    items: [
      {
        id: "shawarma-double-sausage",
        name: "Double Sausage Shawarma",
        price: 4000,
        description: "Two juicy grilled sausages, grilled chicken cuts or beef, wrapped with fresh veggies & shawarma sauce",
        imageSrc: "/images/menu/shawarma/shawarma-double-sausage.jpg",
      },
      {
        id: "shawarma-deluxe",
        name: "Deluxe Shawarma",
        price: 5000,
        tag: "Best Seller",
        description: "Fully loaded shawarma",
        imageSrc: "/images/menu/shawarma/shawarma-deluxe.jpg",
      },
    ],
  },
  {
    key: "platters",
    label: "Platters",
    items: [
      {
        id: "platter-chop-life",
        name: "Chop Life Platter",
        price: 27500,
        description: "1 Smash Burger, 1 Sandwich, 12 Wings, 2 choice of fries, 2 cups of dip sauce",
        imageSrc: "/images/menu/platters/platter-chop-life.jpg",
      },
      {
        id: "platter-foodgies-feast",
        name: "Foodgies Feast",
        price: 38000,
        tag: "Best Seller",
        description: "2 Smash Burgers, 18 Wings, 1 Sandwich, 2 choice of fries, 2 cups of dip sauce",
        imageSrc: "/images/menu/platters/platter-foodgies-feast.jpg",
      },
      {
        id: "platter-wing",
        name: "Wing Platter",
        price: 16500,
        description: "12 Wings, 2 choice of fries, 2 cups of dip sauce",
        imageSrc: "/images/menu/platters/platter-wing.jpg",
      },
    ],
  },
  {
    key: "milkshakes",
    label: "Milkshakes",
    items: [
      {
        id: "shake-vanilla",
        name: "Vanilla Milkshake",
        price: 2000,
        isPlaceholder: true,
        imageSrc: "/images/menu/milkshakes/shake-vanilla.jpg",
      },
      {
        id: "shake-chocolate",
        name: "Chocolate Milkshake",
        price: 2000,
        tag: "Best Seller",
        isPlaceholder: true,
        imageSrc: "/images/menu/milkshakes/shake-chocolate.jpg",
      },
      {
        id: "shake-strawberry",
        name: "Strawberry Milkshake",
        price: 2000,
        isPlaceholder: true,
        imageSrc: "/images/menu/milkshakes/shake-strawberry.jpg",
      },
      {
        id: "shake-oreo",
        name: "Oreo Milkshake",
        price: 2300,
        tag: "Signature",
        isPlaceholder: true,
        imageSrc: "/images/menu/milkshakes/shake-oreo.jpg",
      },
    ],
  },

 // -----------------------------
  // ✅ CONFIRMED CATEGORIES
  // Pulled directly from the physical paper menu photo. Real prices.
  // -----------------------------
  {
    key: "pasta-noodles",
    label: "Pasta & Noodles",
    items: [
      {
        id: "pasta-jollof",
        name: "Jollof Pasta",
        price: 1500,
        imageSrc: "/images/menu/pasta-noodles/pasta-jollof.jpg",
      },
      {
        id: "pasta-seafood",
        name: "Seafood Pasta",
        price: 4000,
        imageSrc: "/images/menu/pasta-noodles/pasta-seafood.jpg",
      },
      {
        id: "pasta-stirfry",
        name: "Stir Fry Pasta",
        price: 2000,
        imageSrc: "/images/menu/pasta-noodles/pasta-stirfry.jpg",
      },
      {
        id: "pasta-pineapple-chicken",
        name: "Pineapple Chicken Pasta",
        price: 2500,
        imageSrc: "/images/menu/pasta-noodles/pasta-pineapple-chicken.jpg",
      },
      {
        id: "pasta-creamy-chicken-penne",
        name: "Creamy Chicken Penne Pasta",
        price: 3500,
        imageSrc: "/images/menu/pasta-noodles/pasta-creamy-chicken-penne.jpg",
      },
      {
        id: "noodles-shredded-chicken",
        name: "Shredded Chicken Noodles",
        price: 1500,
        imageSrc: "/images/menu/pasta-noodles/noodles-shredded-chicken.jpg",
      },
    ],
  },
  {
    key: "rice-meals",
    label: "Rice Meals",
    items: [
      {
        id: "rice-white",
        name: "White Rice",
        price: 1000,
        imageSrc: "/images/menu/rice-meals/rice-white.jpg",
      },
      {
        id: "rice-jollof",
        name: "Jollof Rice",
        price: 1500,
        imageSrc: "/images/menu/rice-meals/rice-jollof.jpg",
      },
      {
        id: "rice-coconut",
        name: "Coconut Rice",
        price: 1500,
        imageSrc: "/images/menu/rice-meals/rice-coconut.jpg",
      },
      {
        id: "rice-fried",
        name: "Fried Rice",
        price: 1500,
        imageSrc: "/images/menu/rice-meals/rice-fried.jpg",
      },
      {
        id: "rice-native",
        name: "Native Rice",
        price: 2000,
        imageSrc: "/images/menu/rice-meals/rice-native.jpg",
      },
      {
        id: "rice-chinese",
        name: "Chinese Rice",
        price: 2300,
        imageSrc: "/images/menu/rice-meals/rice-chinese.jpg",
      },
      {
        id: "rice-jambalaya",
        name: "Jambalaya Rice",
        price: 2300,
        imageSrc: "/images/menu/rice-meals/rice-jambalaya.jpg",
      },
      {
        id: "rice-ofada",
        name: "Ofada Rice",
        price: 1000,
        imageSrc: "/images/menu/rice-meals/rice-ofada.jpg",
      },
    ],
  },
  {
    key: "proteins",
    label: "Proteins",
    items: [
      {
        id: "protein-peppered-chicken",
        name: "Peppered Chicken",
        price: 1300,
        imageSrc: "/images/menu/proteins/protein-peppered-chicken.jpg",
      },
      {
        id: "protein-honey-sesame-chicken",
        name: "Honey Sesame Chicken",
        price: 1500,
        imageSrc: "/images/menu/proteins/protein-honey-sesame-chicken.jpg",
      },
      {
        id: "protein-peppered-turkey",
        name: "Peppered Turkey",
        price: 1500,
        imageSrc: "/images/menu/proteins/protein-peppered-turkey.jpg",
      },
      {
        id: "protein-honey-sesame-turkey",
        name: "Honey Sesame Turkey",
        price: 1800,
        imageSrc: "/images/menu/proteins/protein-honey-sesame-turkey.jpg",
      },
      {
        id: "protein-peppered-snail",
        name: "Peppered Snail",
        price: 2200,
        imageSrc: "/images/menu/proteins/protein-peppered-snail.jpg",
      },
      {
        id: "protein-peppered-croaker",
        name: "Peppered Croaker Fish",
        price: 1500,
        imageSrc: "/images/menu/proteins/protein-peppered-croaker.jpg",
      },
      {
        id: "protein-asun-cowhide",
        name: "Asun / Cowhide",
        price: 1500,
        imageSrc: "/images/menu/proteins/protein-asun-cowhide.jpg",
      },
    ],
  },
  {
    key: "sauces-sides",
    label: "Sauces & Sides",
    items: [
      {
        id: "sauce-protein",
        name: "Protein Sauce (Cowhide, Sausages, Snails & Fish)",
        price: 1500,
        imageSrc: "/images/menu/sauces-sides/sauce-protein.jpg",
      },
      {
        id: "sauce-shredded-chicken",
        name: "Shredded-Chicken Sauce",
        price: 1500,
        imageSrc: "/images/menu/sauces-sides/sauce-shredded-chicken.jpg",
      },
      {
        id: "sauce-gizzdodo",
        name: "Gizzdodo",
        price: 1500,
        imageSrc: "/images/menu/sauces-sides/sauce-gizzdodo.jpg",
      },
      {
        id: "sauce-steamed-veg",
        name: "Steamed Veg w/ Tomato Sauce",
        price: 1500,
        imageSrc: "/images/menu/sauces-sides/sauce-steamed-veg.jpg",
      },
      {
        id: "sauce-goat-curry",
        name: "Goat Meat Curry Sauce",
        price: 2000,
        imageSrc: "/images/menu/sauces-sides/sauce-goat-curry.jpg",
      },
      {
        id: "sauce-ofada",
        name: "Ofada Sauce",
        price: 1500,
        imageSrc: "/images/menu/sauces-sides/sauce-ofada.jpg",
      },
    ],
  },
];

// Convenience: get a flat array of all items across all categories (used for search)
export function getAllMenuItems(): (MenuItem & { category: MenuCategory })[] {
  return menuData.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.key }))
  );
}