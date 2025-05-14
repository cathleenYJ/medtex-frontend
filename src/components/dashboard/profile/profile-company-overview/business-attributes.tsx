import { Tag } from "@ui/tag";
import { BlockSplitter } from "@ui/splitter";
import type { BuyerData } from "@/types";

export const BusinessAttributes: React.FC<{ buyer: BuyerData }> = ({ buyer }) => (
  <div className="basis-full flex flex-wrap gap-[1.875rem] px-12 pt-[1.875rem] pb-10 bg-seven">
    <BusinessAttributesSingle title="Business Attribute" attrs={buyer.business_attributes} />
    <BlockSplitter />
    <BusinessAttributesSingle title="Business Nature" attrs={buyer.business_nature} />
  </div>
);

const BusinessAttributesSingle: React.FC<{ title: string; attrs: string[] }> = ({ title, attrs }) => (
  <div className="basis-full sm:basis-(--1\/2-basis-gap-overview) flex flex-col gap-5">
    <div className="text-white/80 font-medium">{title}</div>
    <div>
      {attrs.map((attr) => (
        <Tag key={attr}>{attr}</Tag>
      ))}
    </div>
  </div>
);
