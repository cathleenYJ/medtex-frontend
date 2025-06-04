import clsx from "clsx";
import { Tag } from "@ui/tag";
import { Hr } from "@ui/splitter";

export const BusinessAttributes: React.FC<{
  className?: string;
  businessAttributes: string[];
  businessNature: string[];
}> = ({ className, businessAttributes, businessNature }) => (
  <div
    className={clsx(
      "basis-full flex flex-wrap gap-5 sm:gap-[1.875rem]",
      className
    )}
  >
    <BusinessAttributeBlock
      title="Business Attribute"
      attrs={businessAttributes}
    />
    <Hr className={clsx("w-full sm:w-0 sm:border-l sm:h-full")} />
    <BusinessAttributeBlock title="Business Nature" attrs={businessNature} />
  </div>
);

const BusinessAttributeBlock: React.FC<{ title: string; attrs: string[] }> = ({
  title,
  attrs,
}) => (
  <div
    className={clsx(
      "basis-full sm:basis-(--1-2-basis-gap-overview) flex flex-col gap-5"
    )}
  >
    <div className={clsx(`text-white/80 font-medium text-sm sm:text-base`)}>
      {title}
    </div>
    <div>
      {attrs.map((attr) => (
        <Tag key={attr}>{attr}</Tag>
      ))}
    </div>
  </div>
);
