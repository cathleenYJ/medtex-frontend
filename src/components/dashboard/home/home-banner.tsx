import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { BannerContainer } from "@ui/banner-container";
import { ArrowDownCircle } from "@icons";
import { ExploreBuyersString, toId } from "@/utils/elements-id";
import { headerSans } from "@/styles/font";

export const HomeBanner: React.FC = () => {
  return (
    <BannerContainer className="flex flex-wrap gap-[1.875rem] pb-[3.125rem]">
      <div className="basis-full sm:basis-(--1-2-basis-gap-30px) flex flex-col gap-2.5">
        <div className="flex flex-col gap-3.5">
          <div className="text-2xl sm:text-[1.75rem] text-b2b-lv1">
            Buyer–Supplier Matching Hub
          </div>
          <div
            className={clsx(
              "text-3xl sm:text-4xl md:text-[2.75rem] text-white font-semibold",
              headerSans.variable
            )}
          >
            Partner with Verified Buyers. Scale Without Borders.
          </div>
        </div>
        <div className="flex flex-col gap-10 content-between text-white grow">
          <div className="text-base sm:text-lg font-medium grow">
            We connect Taiwan’s biomedical innovators with trusted global
            buyers. Access pre-qualified leads and expand your global reach.
          </div>
          <div>
            <Link href={`#${toId(ExploreBuyersString)}`} scroll={true}>
              <ArrowDownCircle className="size-16" />
            </Link>
          </div>
        </div>
      </div>
      <div className="basis-full sm:basis-(--1-2-basis-gap-30px) rounded-[1.25rem] overflow-hidden">
        <Image
          fill
          className="!relative object-cover"
          src="/home-banner-event.png"
          alt=""
        />
      </div>
    </BannerContainer>
  );
};
