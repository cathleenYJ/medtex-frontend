"use client";

import { useEffect, useState } from "react";
import { Card, Cards } from "@ui/card";
import { Spinner } from "@ui/loading";
import { BusinessAttributes } from "@dashboard/business-attributes";
import { CompanyLocation } from "@dashboard/company-location";
import { CompanyLogo } from "@dashboard/company-logo";
import { clientFetch } from "@/data/client";
import type { BuyerData } from "@/types";
import { useRouter } from "next/navigation";

export const FilterResult: React.FC = () => {
  const router = useRouter();
  const [buyers, setBuyers] = useState<BuyerData[]>([]);
  useEffect(() => {
    (async () => setBuyers(await clientFetch.buyers.data()))();
  }, []);
  return (
    <Cards className="grow flex-col gap-3 sm:gap-[1.875rem]">
      {buyers.length === 0 ? (
        <Spinner />
      ) : (
        buyers.map((buyer) => (
          <Card key={buyer.id} className="flex flex-wrap overflow-hidden cursor-pointer" theme={buyer.profile_theme} onClick={() => router.push(`/profile/${buyer.id}`)}>
            <div className="flex flex-wrap sm:flex-nowrap gap-5 px-5 sm:px-7 pt-4 sm:pt-7 pb-4 sm:pb-6 bg-gradient-to-r from-(--gradient-start) to-(--gradient-end)">
              <CompanyLogo className="size-[6.25rem] bg-white/90 rounded-[1.125rem] p-1" src={buyer.company_logo_small} alt="logo" />
              <CompanyLocation className="text-white" company_name={buyer.company_name} company_location={buyer.company_location} company_description={buyer.company_description} />
            </div>
            <BusinessAttributes className="px-5 sm:px-7 pt-4 sm:pt-6 pb-4 sm:pb-7 bg-(--attribute-block)" business_attributes={buyer.business_attributes} business_nature={buyer.business_nature} />
          </Card>
        ))
      )}
    </Cards>
  );
};
