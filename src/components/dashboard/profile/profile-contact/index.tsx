import { ProfileSection } from "@dashboard/profile/profile-section";
import type { BuyerData } from "@/types";
import { Card } from "@ui/card";

export const ProfileContact: React.FC<{ buyer: BuyerData }> = ({}) => {
  return (
    <ProfileSection title="Contact Info">
      <Card className="bg-secondary p-12 basis-full flex flex-wrap gap-[3.75rem]">
        <div className="sm:basis-(--1-2-basis-gap-60px) basis-full"></div>
        <div className="sm:basis-(--1-2-basis-gap-60px) basis-full"></div>
      </Card>
    </ProfileSection>
  );
};
