import { ProfileSection } from "@dashboard/profile/profile-section";
import type { BuyerData } from "@/types";
import { Card } from "@ui/card";

export const ProfileContact: React.FC<{ buyer: BuyerData }> = ({}) => {
  return (
    <ProfileSection title="Contact Info">
      <Card className="bg-secondary p-12 basis-full"></Card>
    </ProfileSection>
  );
};
