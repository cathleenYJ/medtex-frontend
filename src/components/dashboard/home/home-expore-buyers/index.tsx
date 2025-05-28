import { Section } from "@ui/section";
import { FilterOptions } from "./filter-options";
import { FilterResult } from "./filter-result";

export const HomeExporeBuyers: React.FC = () => {
  return (
    <Section className="pt-[7.5rem]" childrenClassName="gap-7 lg:gap-12 flex-wrap md:flex-nowrap" title="Explore Buyers">
      <FilterOptions />
      <FilterResult />
    </Section>
  );
};
