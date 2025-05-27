import clsx from "clsx";
import { BannerContainer } from "@ui/banner-container";
import { headerSans } from "@/styles/font";
import { ArrowDownCircle } from "@icons";

export const HomeBanner: React.FC = () => {
  return (
    <BannerContainer className="flex flex-wrap gap-[1.875rem] pb-[3.125rem]">
      <div className="basis-full sm:basis-(--1-2-basis-gap-30px) flex flex-col gap-2.5">
        <div className="flex flex-col gap-3.5">
          <div className="text-2xl sm:text-[1.75rem] text-five">Buyer–Supplier Matching Hub</div>
          <div className={clsx("text-3xl sm:text-4xl md:text-[2.75rem] text-white font-semibold", headerSans.variable)}>Partner with Verified Buyers. Scale Without Borders.</div>
        </div>
        <div className="flex flex-col gap-10 content-between text-white grow">
          <div className="text-base sm:text-lg font-medium grow">We connect Taiwan’s biomedical innovators with trusted global buyers. Access pre-qualified leads and expand your global reach.</div>
          <div>
            <a href="#">
              <ArrowDownCircle className="size-16" />
            </a>
          </div>
        </div>
      </div>
      <div className="basis-full sm:basis-(--1-2-basis-gap-30px)">
        <img className="w-full h-full object-cover rounded-[1.25rem]" src="/home-banner-event.png" alt="" />
      </div>
    </BannerContainer>
  );
};
