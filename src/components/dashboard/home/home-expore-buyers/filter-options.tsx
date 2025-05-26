"use client";

import { Fragment, Suspense, use } from "react";
import { Card } from "@ui/card";
import { Hr } from "@ui/splitter";
import { Spinner } from "@ui/loading";
import { clientFetch } from "@/data/client";

export const FilterOptions: React.FC = () => {
  return (
    <Card className="basis-full sm:basis-(--1\/3-basis-gap-30px) bg-filter-options px-6 py-7 flex flex-col gap-6">
      <div className="text-white text-xl font-medium">Filter Option</div>
      <Hr />
      <Suspense fallback={<Spinner />}>
        <CheckboxGroups />
      </Suspense>
    </Card>
  );
};

const CheckboxGroups: React.FC = () => {
  const filterOptions = use(clientFetch.basic.filterOptions());
  return (
    <>
      {filterOptions.map(({ legend, options }, i) => (
        <Fragment key={legend}>
          <div className="flex flex-col gap-4">
            <div className="text-white/80 font-medium">{legend}</div>
            <div className="grid gap-5">
              {["All", ...options].map((option) => (
                <CheckOption key={option} option={option} />
              ))}
            </div>
          </div>
          {i !== filterOptions.length - 1 && <Hr />}
        </Fragment>
      ))}
    </>
  );
};

const CheckOption: React.FC<{ option: string }> = ({ option }) => {
  return (
    <label className="flex gap-1.5">
      <input type="checkbox" />
      <div className="text-white/70">{option}</div>
    </label>
  );
};
