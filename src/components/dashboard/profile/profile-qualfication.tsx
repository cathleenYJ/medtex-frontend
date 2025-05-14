import { BuyerData } from "@/types";
import { ProfileCard } from "./profile-card";
import { ProfileSection } from "./profile-section";

export const ProfileQualfication: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  buyer;
  return (
    <ProfileSection title="Qualfication">
      <ProfileCard className="bg-five md:basis-(--1\/3-basis-gap-4) sm:basis-(--1\/2-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-five md:basis-(--1\/3-basis-gap-4) sm:basis-(--1\/2-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-five md:basis-(--1\/3-basis-gap-4) basis-full"></ProfileCard>
      <ProfileCard className="bg-primary basis-full"></ProfileCard>
    </ProfileSection>
  );
};
