import { SectionContainer } from "@ui/section-container";
import { HomeBanner } from "@dashboard/home/home-banner";
import { Recommended } from "@dashboard/home/recommended";
import { ExporeBuyers } from "@dashboard/home/expore-buyers";

export default function Home() {
  return (
    <div data-home className="pb-40">
      <HomeBanner />
      <SectionContainer>
        <Recommended />
        <ExporeBuyers className="pt-[7.5rem]" title="Explore Buyers" />
      </SectionContainer>
    </div>
  );
}
