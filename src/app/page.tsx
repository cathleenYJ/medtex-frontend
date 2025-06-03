import { SectionContainer } from "@ui/section-container";
import { HomeBanner } from "@dashboard/home/home-banner";
import { Recommended } from "@dashboard/home/recommended";
import { ExploreBuyers } from "@dashboard/home/explore-buyers";
import { ExploreBuyersString } from "@/utils/elements-id";

export default function Home() {
  return (
    <div data-home className="pb-40">
      <HomeBanner />
      <SectionContainer>
        <Recommended />
        <ExploreBuyers className="pt-[7.5rem]" title={ExploreBuyersString} />
      </SectionContainer>
    </div>
  );
}
