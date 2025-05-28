"use client";

import { Card } from "@ui/card";
import { Hr } from "@ui/splitter";
import { CheckboxGroups } from "./filter-checkbox";

export const FilterOptions: React.FC = () => {
  return (
    <Card className="basis-full sm:basis-(--1-3-basis-gap-30px) shrink-0 max-h-screen overflow-hidden pe-0.5 py-7 bg-filter-options md:sticky md:top-0 [&::-webkit-scrollbar]:w-0.5">
      <div className="gap-6 flex flex-col bg-inherit h-full overflow-auto ps-6 pe-5.5">
        <div className="text-white text-xl font-medium sticky top-0 z-10 bg-inherit">
          <div>Filter Option</div>
          <Hr className="mt-6" />
        </div>
        <CheckboxGroups />
      </div>
    </Card>
  );
};
