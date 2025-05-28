import { Card } from "@ui/card";
import { Section } from "@ui/section";
import { BusinessAttributes } from "@dashboard/business-attributes";
import type { BuyerData } from "@/types";
import { CompanyInfo } from "./company-info";

export const CompanyOverview: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <Section title="Company Overview">
      <Card className="bg-b2b-lv6 flex flex-wrap overflow-hidden">
        <div className="flex flex-wrap-reverse text-white">
          <div className="basis-full lg:basis-1/2 pt-8 sm:pt-[1.875rem] md:pt-[3.125rem] px-6 sm:px-[1.875rem] md:px-12 pb-9 flex flex-col gap-10">
            <CompanyInfo buyer={buyer} />
          </div>
          <div className="basis-full lg:basis-1/2">
            <img className="w-full h-full object-cover" src={buyer.company_overview} alt="" />
          </div>
        </div>
        <BusinessAttributes className="px-6 sm:px-[1.875rem] md:px-12 pt-8 sm:pt-[1.875rem] pb-8 sm:pb-[1.875rem] md:pb-10 bg-b2b-lv5" business_attributes={buyer.business_attributes} business_nature={buyer.business_nature} />
      </Card>
    </Section>
  );
};
