import clsx from "clsx";
import { Cards } from "@ui/card";
import { SectionTitle } from "@ui/title";

export const Section: React.FC<{ className?: string; title?: string; children?: React.ReactNode }> = ({ className, title, children }) => (
  <SectionBlock className={className}>
    <SectionTitle className="font-light px-2.5">{title}</SectionTitle>
    <Cards className="gap-3 sm:gap-4">{children}</Cards>
  </SectionBlock>
);

export const SectionBlock: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return <section className={clsx("flex flex-col gap-6", className)}>{children}</section>;
};
