import { MapPinIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Tag } from "@ui/tag";
import { BlockSplitter } from "@ui/splitter";
import type { BuyerData } from "@/types";

export const CompanyInfo: React.FC<{ buyer: BuyerData }> = ({ buyer }) => (
  <>
    <div className="flex flex-wrap gap-5">
      <CompanyLogo src={buyer.company_logo} alt="logo" />
      <CompanyLocation buyer={buyer} />
      <CompanyWebsite href={buyer.company_website} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: buyer.company_description.replaceAll("\n", "<br>") }} />
    <div className="basis-full flex flex-wrap gap-[1.875rem] font-bold">
      <CompanyInfoSingle title="Established Since">{buyer.company_established_year}</CompanyInfoSingle>
      <BlockSplitter />
      <CompanyInfoSingle title="Annual revenue">{buyer.business_annual_revenue}</CompanyInfoSingle>
      <BlockSplitter />
      <CompanyInfoSingle title="Employees">{buyer.number_of_employees}</CompanyInfoSingle>
    </div>
  </>
);

const CompanyLogo: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <div className="flex items-center max-w-36">
    <img src={src} alt={alt} />
  </div>
);

const CompanyLocation: React.FC<{ buyer: BuyerData }> = ({ buyer }) => (
  <div className="flex flex-col gap-1 w-max justify-between">
    <div className="text-2xl font-semibold">{buyer.company_name}</div>
    <div className="flex gap-1 items-center">
      <MapPinIcon className="w-4 h-4" />
      {buyer.company_location}
    </div>
  </div>
);

const CompanyWebsite: React.FC<{ href: string }> = ({ href }) => (
  <div className="w-full">
    <Tag className="sm:w-min w-full h-min text-center px-0 py-0">
      <a className="flex gap-2.5 justify-between items-center w-full h-min px-5 py-3" href={href} target="_blank">
        {href.replace(/^http[s]?\:\/\//g, "")}
        <ArrowUpRightIcon className="w-4 h-4" />
      </a>
    </Tag>
  </div>
);

const CompanyInfoSingle: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="flex sm:flex-col justify-between gap-5 grow sm:w-min w-full font-medium">
    <div>{title}</div>
    <div className="text-xl w-max">{children}</div>
  </div>
);
