import { Suspense } from "react";
import { Section } from "@ui/section";
import { LoadingBar } from "@ui/loading";
import { FilterOptions, FilterResult } from "@/components/search-filter";

export const ExporeBuyers: React.FC = () => {
  return (
    <Section className="pt-[7.5rem]" childrenClassName="gap-7 lg:gap-12 flex-wrap md:flex-nowrap" title="Explore Buyers">
      <Suspense fallback={<LoadingBar />}>
        <FilterOptions />
        <FilterResult />
      </Suspense>
    </Section>
  );
};
