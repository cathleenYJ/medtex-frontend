"use client";

import { useForm } from "react-hook-form";
import { Card } from "@ui/card";
import { Hr } from "@ui/splitter";
import type { FilterForm } from "@/types";
import { CheckboxGroups } from "./filter-checkbox";

export const FilterOptions: React.FC = () => {
  return (
    <Card className="basis-full sm:basis-(--1\/3-basis-gap-30px) bg-filter-options px-6 py-7 flex flex-col gap-6">
      <div className="text-white text-xl font-medium">Filter Option</div>
      <Hr />
      <CheckboxGroups />
    </Card>
  );
};
