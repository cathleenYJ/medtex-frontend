"use client";

import { useEffect, useState, useTransition } from "react";
import { ReadonlyURLSearchParams, useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { Card, Cards } from "@ui/card";
import { Spinner } from "@ui/loading";
import { BusinessAttributes } from "@dashboard/business-attributes";
import { CompanyLocation } from "@dashboard/company-location";
import { CompanyLogo } from "@dashboard/company-logo";
import { clientFetch } from "@/data/client";
import { filterOptionLabels } from "@/utils/filter-form";
import { useAppSearchParams } from "@/hooks/use-search-params";
import type { BuyerData } from "@/types";

const searchResult = (
  buyer: BuyerData,
  searchParams: ReadonlyURLSearchParams
): boolean => {
  const res = Object.keys(filterOptionLabels).some((key) => {
    const param = searchParams.get(key);
    if (!param) return true;
    return JSON.parse(param).includes();
  });
  //   return res in future when get correct byuers api
  return Boolean(buyer || res);
};

export const FilterResult: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  });
  const { createQueryString, searchParams } = useAppSearchParams();
  const [isPending, startTransition] = useTransition();
  const [buyers, setBuyers] = useState<BuyerData[]>([]);
  const currentSize = Number(searchParams?.get("size") ?? "0");
  const isMax = currentSize >= buyers.length;
  const step = 3;
  const loadMore = () =>
    !isMax &&
    window.history.pushState(
      null,
      "",
      `?${createQueryString("size", String(currentSize + step))}`
    );
  useEffect(() => {
    inView && loadMore();
  }, [inView]);
  useEffect(() => {
    startTransition(async () => setBuyers(await clientFetch.buyers.data()));
    window.history.pushState(
      null,
      "",
      `?${createQueryString("size", String(step))}`
    );
  }, []);
  return (
    <Cards className="grow flex-col gap-3 sm:gap-[1.875rem]">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {buyers
            .filter((buyer) => searchParams && searchResult(buyer, searchParams))
            .slice(0, Number(searchParams?.get("size") ?? "0") + 1)
            .map((buyer) => (
              <BuyerResult key={buyer.id} buyer={buyer} />
            ))}
          {!isMax && (
            <div
              ref={ref}
              className="w-full h-0 relative before:-mt-96 before:content-[''] before:block before:w-full before:h-96 before:bg-gradient-to-t before:from-black before:to-transparent"
            />
          )}
        </>
      )}
    </Cards>
  );
};

const BuyerResult: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  const router = useRouter();
  const onClick = () => router.push(`/profile/${buyer.id}`);
  return (
    <Card
      className="flex flex-wrap overflow-hidden cursor-pointer"
      theme={buyer.profile_theme}
      onClick={onClick}
    >
      <div className="flex flex-wrap sm:flex-nowrap gap-5 px-5 sm:px-7 pt-4 sm:pt-7 pb-4 sm:pb-6 bg-gradient-to-r from-(--gradient-start) to-(--gradient-end)">
        <CompanyLogo
          className="size-[6.25rem] bg-white/90 rounded-[1.125rem] p-1"
          src={buyer.company_logo_small}
          alt="logo"
        />
        <CompanyLocation
          className="text-white"
          companyName={buyer.company_name}
          companyLocation={buyer.company_location}
          companyDescription={buyer.company_description}
        />
      </div>
      <BusinessAttributes
        className="px-5 sm:px-7 pt-4 sm:pt-6 pb-4 sm:pb-7 bg-(--attribute-block)"
        businessAttributes={buyer.business_attributes}
        businessNature={buyer.business_nature}
      />
    </Card>
  );
};
