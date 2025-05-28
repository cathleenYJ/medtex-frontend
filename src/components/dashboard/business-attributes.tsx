import clsx from "clsx";
import { Tag } from "@ui/tag";
import { Hr } from "@ui/splitter";

export const BusinessAttributes: React.FC<{ className?: string; business_attributes: string[]; business_nature: string[] }> = ({ className, business_attributes, business_nature }) => (
  <div className={clsx("basis-full flex flex-wrap gap-5 sm:gap-[1.875rem]", className)}>
    <BusinessAttributeBlock title="Business Attribute" attrs={business_attributes} />
    <Hr className={clsx("w-full sm:w-0 sm:border-l sm:h-full")} />
    <BusinessAttributeBlock title="Business Nature" attrs={business_nature} />
  </div>
);

const BusinessAttributeBlock: React.FC<{ title: string; attrs: string[] }> = ({ title, attrs }) => (
  <div className={clsx("basis-full sm:basis-(--1-2-basis-gap-overview) flex flex-col gap-5")}>
    <div className={clsx(`text-white/80 font-medium text-sm sm:text-base`)}>{title}</div>
    <div>
      {attrs.map((attr) => (
        <Tag key={attr}>{attr}</Tag>
      ))}
    </div>
  </div>
);
