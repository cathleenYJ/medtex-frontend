import { Card } from "@ui/card";
import { Tag } from "@ui/tag";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ProfileSection } from "@dashboard/profile/profile-section";
import type { BuyerData } from "@/types";
import React from "react";
import { CompanyInfo } from "./company-info";
import { BusinessAttributes } from "./business-attributes";

export const ProfileCompanyOverview: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <ProfileSection title="Company Overview">
      <Card className="bg-primary flex flex-wrap overflow-hidden">
        <div className="flex flex-wrap-reverse text-white">
          <div className="basis-full lg:basis-1/2 pt-[3.125rem] px-12 pb-9 flex flex-col gap-10">
            <CompanyInfo buyer={buyer} />
          </div>
          <div className="basis-full lg:basis-1/2">
            <img className="w-full h-full object-cover" src={buyer.company_overview} alt="" />
          </div>
        </div>
        <BusinessAttributes buyer={buyer} />
      </Card>
    </ProfileSection>
  );
};
