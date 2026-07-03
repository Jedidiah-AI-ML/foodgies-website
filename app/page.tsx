import Hero from "@/components/home/Hero";
import BurgersSection from "@/components/home/BurgersSection";
import FriesSection from "@/components/home/FriesSection";
import ShawarmaSection from "@/components/home/ShawarmaSection";
import OtherMenuSection from "@/components/home/OtherMenuSection";
import MilkshakeSection from "@/components/home/MilkshakeSection";
import ClosingCTA from "@/components/home/ClosingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BurgersSection />
      <FriesSection />
      <ShawarmaSection />
      <OtherMenuSection />
      <MilkshakeSection />
      <ClosingCTA />
    </main>
  );
}