import { Section } from "@ui/section";
import { FilterOptions } from "./filter-options";
import { FilterResult } from "./filter-result";

export const HomeExporeBuyers: React.FC = () => {
  return (
    <Section className="pt-[7.5rem]" childrenClassName="gap-12 flex-col md:flex-row" title="Explore Buyers">
      <FilterOptions />
      <FilterResult />
    </Section>
  );
};
