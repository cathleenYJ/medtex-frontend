"use client";

import { Card } from "@ui/card";
import { ProfileSection } from "@dashboard/profile/profile-section";
import { LockedInfo } from "./locked-info";
import { DisplayInfo } from "./display-info";

export const ProfileContact: React.FC = () => {
  return (
    <ProfileSection title="Contact Info">
      <Card className="bg-secondary py-[1.875rem] sm:py-10 md:py-12 px-5 sm:px-[1.875rem] md:px-12 basis-full flex flex-wrap sm:gap-[1.875rem] lg:gap-[3.75rem]">
        <LockedInfo />
        <DisplayInfo />
      </Card>
    </ProfileSection>
  );
};
