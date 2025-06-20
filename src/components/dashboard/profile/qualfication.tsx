import { Section } from "@ui/section";
import type { BuyerData } from "@/types";
import { ProfileCard } from "./profile-card";

export const Qualfication: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  buyer;
  return (
    <Section title="Qualfication">
      <ProfileCard className="bg-b2b-lv1 md:basis-(--1-3-basis-gap-4) sm:basis-(--1-2-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-b2b-lv1 md:basis-(--1-3-basis-gap-4) sm:basis-(--1-2-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-b2b-lv1 md:basis-(--1-3-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-b2b-lv6 basis-full"></ProfileCard>
    </Section>
  );
};
