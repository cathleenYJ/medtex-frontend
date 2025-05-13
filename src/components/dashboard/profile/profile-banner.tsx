import clsx from "clsx";
import Link from "next/link";
import { CustomButton } from "@ui/button";
import type { BuyerData } from "@/types";
import { headerSans } from "@/app/layout";

export const ProfileBanner: React.FC<{ buyer: BuyerData }> = ({ buyer }) => {
  return (
    <div className={clsx("pt-32 sm:pt-48 sm:pb-20 px-0 sm:px-2.5 2xl:px-24 w-full bg-(image:--profile-banner) bg-no-repeat bg-cover bg-center", "relative before:content-[''] before:block before:sm:hidden before:absolute before:inset-0 before:backdrop-blur-lg before:bg-black/30")}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap gap-10 px-4 sm:px-10 py-14 w-full max-w-4xl sm:backdrop-blur-lg sm:bg-black/30 sm:rounded-2xl relative">
          <div className="flex flex-wrap gap-5 sm:gap-7 w-full text-white">
            <div className="w-full flex flex-wrap gap-2.5 sm:gap-5">
              <div className="flex items-center w-max sm:w-fit">
                <img className="w-28" src={buyer.company_logo} alt="" />
              </div>
              <div className="flex items-center w-max sm:w-fit text-lg sm:text-2xl font-semibold">{buyer.company_name}</div>
            </div>
            <div className={clsx("w-full text-[1.75rem] sm:text-[2.625rem]", headerSans.variable)}>{buyer.promotion_text}</div>
            <div className="w-full text-base sm:text-lg text-five">{buyer.company_description}</div>
          </div>
          <CustomButton component={Link} href="/" className="px-8 py-4 bg-white border border-solid border-white/20 shadow-btn rounded-[0.5rem] font-medium sm:text-lg text-base text-primary">
            Get in touch →
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
