"use client";

import { Card } from "@ui/card";
import { Hr } from "@ui/splitter";
import { CheckboxGroups } from "./filter-checkbox";

export const FilterOptions: React.FC = () => {
  return (
    <Card className="basis-full md:basis-(--1-3-basis-gap-30px) shrink-0 max-h-96 md:max-h-screen pe-0.5 py-7 bg-filter-options md:sticky md:top-0">
      <div className="gap-6 flex flex-col bg-inherit h-full overflow-y-auto ps-5 sm:ps-6 pe-4.5 sm:pe-5.5">
        <div className="text-white text-xl font-medium sticky top-0 z-10 bg-inherit">
          <div>Filter Option</div>
          <Hr className="mt-6" />
        </div>
        <CheckboxGroups />
      </div>
    </Card>
  );
};
