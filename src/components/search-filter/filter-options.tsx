"use client";

import clsx from "clsx";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Card } from "@ui/card";
import { Hr } from "@ui/splitter";
import { ToggleBox } from "@ui/toggle-box";
import { CheckboxGroups } from "./filter-checkbox";

export const FilterOptions: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Card className="basis-full md:basis-(--1-3-basis-gap-30px) shrink-0 max-h-96 md:max-h-screen pe-0.5 py-3 md:py-7 bg-filter-options sticky top-0 z-10 shadow-lg md:shadow-none shadow-black/10">
      <div className="flex flex-col bg-inherit h-full overflow-y-auto ps-5 sm:ps-6 pe-4.5 sm:pe-5.5">
        <div className="text-white text-xl font-medium sticky top-0 z-10 bg-inherit cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
          <div className="flex justify-between items-center">
            <div>Filter Option</div>
            <div className="size-6 bg-white/6 rounded-sm md:hidden">
              <ChevronDownIcon className={clsx("transition-transform duration-400", open && "rotate-180")} />
            </div>
          </div>
          <Hr className="my-3 md:my-6" />
        </div>
        <ToggleBox className="gap-3 md:gap-6 flex flex-col" open={open}>
          <CheckboxGroups />
        </ToggleBox>
      </div>
    </Card>
  );
};
