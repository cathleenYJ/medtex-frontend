"use client";

import { clientFetch } from "@/data/client";
import { BuyerData } from "@/types";
import { BusinessAttributes } from "@dashboard/business-attributes";
import { CompanyLocation } from "@dashboard/company-location";
import { CompanyLogo } from "@dashboard/company-logo";
import { Card, Cards } from "@ui/card";
import { useEffect, useState } from "react";

export const FilterResult: React.FC = () => {
  const [buyers, setBuyers] = useState<BuyerData[]>([]);
  useEffect(() => {
    (async () => setBuyers(await clientFetch.buyers.data()))();
  }, []);
  console.log(buyers);
  return (
    <Cards className="grow flex flex-col gap-[1.875rem]">
      {buyers.map((buyer) => (
        <Card key={buyer.id} className="flex flex-wrap">
          <div className="flex flex-wrap gap-5">
            <CompanyLogo src={buyer.company_logo} alt="logo" />
            <CompanyLocation className="text-white" company_name={buyer.company_name} company_location={buyer.company_location} />
          </div>
          <BusinessAttributes business_attributes={buyer.business_attributes} business_nature={buyer.business_nature} />
        </Card>
      ))}
    </Cards>
  );
};
