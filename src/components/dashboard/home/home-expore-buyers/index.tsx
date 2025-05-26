import { Cards } from "@ui/card";
import { Section } from "@ui/section";
import { FilterOptions } from "./filter-options";

export const HomeExporeBuyers: React.FC = () => {
  return (
    <Section className="pt-[7.5rem]" childrenClassName="gap-12" title="Explore Buyers">
      <FilterOptions />
      <Cards className="grow flex flex-col gap-[1.875rem]"></Cards>
    </Section>
  );
};
