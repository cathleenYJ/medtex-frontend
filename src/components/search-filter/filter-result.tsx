"use client";

import { useEffect, useState, useTransition } from "react";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";
import { Card, Cards } from "@ui/card";
import { Spinner } from "@ui/loading";
import { BusinessAttributes } from "@dashboard/business-attributes";
import { CompanyLocation } from "@dashboard/company-location";
import { CompanyLogo } from "@dashboard/company-logo";
import { clientFetch } from "@/data/client";
import { filterOptionLabels } from "@/utils/filter-form";
import type { BuyerData } from "@/types";
import { LoadMore } from "./load-more";

const searchResult = (buyer: BuyerData, searchParams: ReadonlyURLSearchParams): boolean => {
  const res = Object.keys(filterOptionLabels).some((key) => {
    const param = searchParams.get(key);
    if (!param) return true;
    return JSON.parse(param).includes();
  });
  //   return res in future when get correct byuers api
  return Boolean(buyer || res);
};

export const FilterResult: React.FC = () => {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [buyers, setBuyers] = useState<BuyerData[]>([]);
  const [page, setPage] = useState<number>(1);
  const loadMore = () => setPage((prev) => prev + 1);
  useEffect(() => {
    startTransition(async () => setBuyers(await clientFetch.buyers.data()));
  }, []);
  return (
    <Cards className="grow flex-col gap-3 sm:gap-[1.875rem]">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {buyers
            .filter((buyer) => searchResult(buyer, searchParams))
            .slice(0, page * 10)
            .map((buyer) => (
              <BuyerResult key={buyer.id} buyer={buyer} />
            ))}
          <LoadMore loadMore={loadMore} currentPage={page} maxPage={Math.ceil(buyers.length / 10)} />
        </>
      )}
    </Cards>
  );
};

const BuyerResult: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  const router = useRouter();
  const onClick = () => router.push(`/profile/${buyer.id}`);
  return (
    <Card className="flex flex-wrap overflow-hidden cursor-pointer" theme={buyer.profile_theme} onClick={onClick}>
      <div className="flex flex-wrap sm:flex-nowrap gap-5 px-5 sm:px-7 pt-4 sm:pt-7 pb-4 sm:pb-6 bg-gradient-to-r from-(--gradient-start) to-(--gradient-end)">
        <CompanyLogo className="size-[6.25rem] bg-white/90 rounded-[1.125rem] p-1" src={buyer.company_logo_small} alt="logo" />
        <CompanyLocation className="text-white" companyName={buyer.company_name} companyLocation={buyer.company_location} companyDescription={buyer.company_description} />
      </div>
      <BusinessAttributes className="px-5 sm:px-7 pt-4 sm:pt-6 pb-4 sm:pb-7 bg-(--attribute-block)" businessAttributes={buyer.business_attributes} businessNature={buyer.business_nature} />
    </Card>
  );
};
