import { Section } from "@ui/block";
import { Cards } from "@ui/card";
import { SectionTitle } from "@ui/title";

export const ProfileSection: React.FC<{ className?: string; title?: string; children?: React.ReactNode }> = ({ className, title, children }) => (
  <Section className={className}>
    <SectionTitle>{title}</SectionTitle>
    <Cards>{children}</Cards>
  </Section>
);
