import clsx from "clsx";
import { MapPinIcon } from "@heroicons/react/24/outline";

export const CompanyLocation: React.FC<{ className?: string; company_name: string; company_location: string; company_description?: string }> = ({ className, company_name, company_location, company_description }) => (
  <>
    <div className={clsx("flex flex-col gap-1 max-w-full justify-between", className)}>
      <div className="text-xl sm:text-2xl font-semibold">{company_name}</div>
      <div className="flex gap-1 items-center">
        <MapPinIcon className="size-4" />
        {company_location}
      </div>
      {company_description && <div className="hidden sm:block text-white/70">{company_description}</div>}
    </div>
    {company_description && <div className="block sm:hidden text-white/70">{company_description}</div>}
  </>
);
