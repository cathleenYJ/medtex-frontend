"use client";

import { Card } from "@ui/card";
import { Section } from "@ui/section";
import type { BuyerData } from "@/types";
import { LockedInfo } from "./locked-info";
import { DisplayInfo } from "./display-info";

export const Contact: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <Section title="Contact Info">
      <Card className="bg-b2b-lv4 py-[1.875rem] sm:py-10 md:py-12 px-5 sm:px-[1.875rem] md:px-12 basis-full flex flex-wrap sm:gap-[1.875rem] lg:gap-[3.75rem]">
        <LockedInfo />
        <DisplayInfo timeZone={buyer.time_zone} languages={buyer.languages} />
      </Card>
    </Section>
  );
};
