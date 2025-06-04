import { Suspense } from "react";
import { Section } from "@ui/section";
import { LoadingBar } from "@ui/loading";
import { FilterOptions, FilterResult } from "@/components/search-filter";

export const ExploreBuyers: React.FC<{
  className?: string;
  title?: string;
}> = ({ className, title }) => {
  return (
    <Section
      className={className}
      childrenClassName="gap-7 lg:gap-12 flex-wrap md:flex-nowrap"
      title={title}
    >
      <Suspense fallback={<LoadingBar />}>
        <FilterOptions />
        <FilterResult />
      </Suspense>
    </Section>
  );
};
