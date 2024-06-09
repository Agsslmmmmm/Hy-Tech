import { AnimatedTooltipPreview } from "@/components/animated-tooltip-sect";
import { BentoGridProductSection } from "@/components/bento-grid-sect";
import { HeroSection } from "@/components/hero";
import { HeroScrollSection } from "@/components/hero-scroll";
import { TabsSection } from "@/components/tabs-sect";
import { WobbleCardSection } from "@/components/woble-card-sect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white/40 dark:bg-black">
      <HeroScrollSection />
      <HeroSection />
      <WobbleCardSection />
      <TabsSection />
      <BentoGridProductSection />
      <AnimatedTooltipPreview />
    </main>
  );
}
