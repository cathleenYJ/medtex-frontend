import clsx from "clsx";
import { MapPinIcon } from "@heroicons/react/24/outline";

export const CompanyLocation: React.FC<{ className?: string; company_name: string; company_location: string }> = ({ className, company_name, company_location }) => (
  <div className={clsx("flex flex-col gap-1 w-max justify-between", className)}>
    <div className="text-xl sm:text-2xl font-semibold">{company_name}</div>
    <div className="flex gap-1 items-center">
      <MapPinIcon className="w-4 h-4" />
      {company_location}
    </div>
  </div>
);
