import { SectionContainer } from "@ui/section-container";
import { HomeBanner } from "@dashboard/home/home-banner";
import { HomeRecommended } from "@dashboard/home/home-recommended";
import { HomeExporeBuyers } from "@dashboard/home/home-expore-buyers";

export default function Home() {
  return (
    <div data-home className="pb-40">
      <HomeBanner />
      <SectionContainer>
        <HomeRecommended />
        <HomeExporeBuyers />
      </SectionContainer>
    </div>
  );
}
