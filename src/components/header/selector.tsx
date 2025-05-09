import clsx from "clsx";
import { useRouter } from "next/navigation";
import { Select } from "@headlessui/react";
import { useAppSearchParams } from "@/hooks/use-search-params";

export const Selector: React.FC<{ label: string; options: string[]; placeholder?: string }> = ({ label, options, placeholder }) => {
  const router = useRouter();
  const { createQueryString } = useAppSearchParams();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const searchParams = createQueryString(label, e.target.value, true);
    router.push(`/result?${searchParams}`);
  };
  return (
    <Select className={clsx("text-white/80 bg-black/0")} onChange={onChange} defaultValue={placeholder || options[0]}>
      {[placeholder, ...options].filter(Boolean).map((option) => (
        <option key={`${label}-${option}`} value={option} {...(option === placeholder && { disabled: true })}>
          {option}
        </option>
      ))}
    </Select>
  );
};
