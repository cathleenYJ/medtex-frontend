import { Card } from "@ui/card";

export const HighlightCard: React.FC<{ title?: React.ReactNode; children?: React.ReactNode; number?: React.ReactNode }> = ({ title, children, number }) => (
  <Card className="bg-b2b-lv4 text-white py-8 sm:py-[1.875rem] md:py-[3.75rem] px-6 sm:px-[1.875rem] md:px-10 basis-full lg:basis-(--1-3-basis-gap-4) relative">
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute flex justify-end items-end w-full h-full text-[15rem]/[15rem] text-white/10 font-extrabold -right-6 -bottom-10">
        <span className="scale-x-125 w-min h-min block">{number}</span>
      </div>
    </div>
    <div className="relative flex flex-col gap-4 sm:gap-2.5 lg:gap-[1.875rem]">
      <div className="text-[1.375rem] sm:text-2xl md:text-[1.75rem] font-bold">{title}</div>
      <div className="text-sm sm:text-base">{children}</div>
    </div>
  </Card>
);
