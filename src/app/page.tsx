import { SectionContainer } from "@ui/section-container";
import { HomeBanner } from "@dashboard/home/home-banner";
import { Recommended } from "@dashboard/home/recommended";
import { ExploreBuyers } from "@dashboard/home/explore-buyers";

export default function Home() {
  return (
    <div data-home className="pb-40">
      <HomeBanner />
      <SectionContainer>
        <Recommended />
        <ExploreBuyers className="pt-[7.5rem]" title="Explore Buyers" />
      </SectionContainer>
    </div>
  );
}
