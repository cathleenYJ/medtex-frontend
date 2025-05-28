"use client";

import clsx from "clsx";
import Link from "next/link";
import { CustomButton } from "@ui/button";
import { ContactBlock } from "./contact-block";
import { headerSans } from "@/styles/font";

export const DisplayInfo: React.FC = () => {
  const timeZone = "UTC+08:00 (Asia/Taipei)";
  const languages = ["English", "Chinese"];
  return (
    <div className="basis-full sm:basis-(--1-2-basis-gap-30px) md:basis-(--1-2-basis-gap-60px) flex flex-col gap-10 md:py-5 py-2.5">
      <div className="flex flex-wrap gap-6 sm:gap-[1.875rem]">
        <div className={clsx(headerSans.variable, "basis-full text-b2b-lv2 text-2xl sm:text-[1.75rem] md:text-[2rem] font-light")}>Start the Conversation About Our Next Project</div>
        <div className="basis-full flex flex-wrap gap-[1.875rem] text-white">
          <ContactBlock title="Contact Time Zone">{timeZone}</ContactBlock>
          <div className="w-full xl:w-px h-px xl:h-full bg-white/20" />
          <ContactBlock title="Language">{languages.join(", ")}</ContactBlock>
        </div>
      </div>
      <div>
        <CustomButton component={Link} href="/admin" className="py-4 px-8 rounded-lg bg-appointment-btn text-b2b-lv6 text-base md:text-2xl font-medium">
          Make Appointment →
        </CustomButton>
      </div>
    </div>
  );
};
