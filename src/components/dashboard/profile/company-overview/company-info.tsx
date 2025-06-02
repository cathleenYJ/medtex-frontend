import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Tag } from "@ui/tag";
import { Hr } from "@ui/splitter";
import { CompanyLogo } from "@dashboard/company-logo";
import { CompanyLocation } from "@dashboard/company-location";
import type { BuyerData } from "@/types";

export const CompanyInfo: React.FC<{ buyer: BuyerData }> = ({ buyer }) => (
  <>
    <div className="flex flex-wrap gap-5">
      <CompanyLogo className="max-w-36" src={buyer.company_logo} alt="logo" />
      <CompanyLocation companyName={buyer.company_name} companyLocation={buyer.company_location} />
      <CompanyWebsite href={buyer.company_website} />
    </div>
    <div className="text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: buyer.company_description.replaceAll("\n", "<br>") }} />
    <div className="basis-full flex flex-wrap gap-4 sm:gap-[1.875rem] font-bold">
      <CompanyInfoSingle title="Established Since">{buyer.company_established_year}</CompanyInfoSingle>
      <Hr className="sm:w-0 sm:border-l sm:h-full" />
      <CompanyInfoSingle title="Annual revenue">{buyer.business_annual_revenue}</CompanyInfoSingle>
      <Hr className="sm:w-0 sm:border-l sm:h-full" />
      <CompanyInfoSingle title="Employees">{buyer.number_of_employees}</CompanyInfoSingle>
    </div>
  </>
);

const CompanyWebsite: React.FC<{ href: string }> = ({ href }) => (
  <div className="w-full">
    <Tag className="sm:w-min w-full h-min text-center px-0 py-0">
      <Link className="flex gap-2.5 justify-between items-center w-full h-min px-5 py-3" href={href} target="_blank">
        {href.replace(/^http[s]?\:\/\//g, "")}
        <ArrowUpRightIcon className="size-4" />
      </Link>
    </Tag>
  </div>
);

const CompanyInfoSingle: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="flex sm:flex-col justify-between gap-5 grow sm:w-min w-full font-medium">
    <div className="text-sm sm:text-base">{title}</div>
    <div className="text-base sm:text-xl w-max">{children}</div>
  </div>
);
