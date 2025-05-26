import { Section } from "@ui/section";
import type { BuyerData } from "@/types";
import { ProfileCard } from "./profile-card";

export const ProfileQualfication: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  buyer;
  return (
    <Section title="Qualfication">
      <ProfileCard className="bg-five md:basis-(--1\/3-basis-gap-4) sm:basis-(--1\/2-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-five md:basis-(--1\/3-basis-gap-4) sm:basis-(--1\/2-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-five md:basis-(--1\/3-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-primary basis-full"></ProfileCard>
    </Section>
  );
};
