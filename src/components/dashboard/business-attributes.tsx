import { Tag } from "@ui/tag";
import { Hr } from "@ui/splitter";

export const BusinessAttributes: React.FC<{ business_attributes: string[]; business_nature: string[] }> = ({ business_attributes, business_nature }) => (
  <div className="basis-full flex flex-wrap gap-[1.875rem] px-6 sm:px-[1.875rem] md:px-12 pt-8 sm:pt-[1.875rem] pb-8 sm:pb-[1.875rem] md:pb-10 bg-secondary/30">
    <BusinessAttributesSingle title="Business Attribute" attrs={business_attributes} />
    <Hr className="sm:w-px sm:h-full" />
    <BusinessAttributesSingle title="Business Nature" attrs={business_nature} />
  </div>
);

const BusinessAttributesSingle: React.FC<{ title: string; attrs: string[] }> = ({ title, attrs }) => (
  <div className="basis-full sm:basis-(--1-2-basis-gap-overview) flex flex-col gap-5">
    <div className="text-white/80 font-medium text-sm sm:text-base">{title}</div>
    <div>
      {attrs.map((attr) => (
        <Tag key={attr}>{attr}</Tag>
      ))}
    </div>
  </div>
);
