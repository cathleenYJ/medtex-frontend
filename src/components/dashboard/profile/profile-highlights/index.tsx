import { ProfileSection } from "@dashboard/profile/profile-section";
import type { BuyerData } from "@/types";
import { Cards } from "@ui/card";

export const ProfileHighlights: React.FC<{ buyer: BuyerData }> = ({}) => {
  return <ProfileSection title="Company Highlights"></ProfileSection>;
};
