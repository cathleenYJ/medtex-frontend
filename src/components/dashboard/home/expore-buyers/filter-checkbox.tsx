import clsx from "clsx";
import { Fragment, useEffect, useState, useTransition } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Hr } from "@ui/splitter";
import { Spinner } from "@ui/loading";
import { clientFetch } from "@/data/client";
import type { FilterForm, FilterOptionType } from "@/types";
import { Checkbox } from "@ui/form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterOptionLabels = {
  region_covered: "Market Region",
  purchasing_requirement: "Interested Area",
  partnership_looking_for: "Partnership Types",
};
const all = { key: "all", label: "All" };

export const CheckboxGroups: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [filterOptions, setFilterOptions] = useState<FilterOptionType | null>(null);
  const { register, watch, setValue } = useForm<FilterForm>();
  const filterOptionLogic = ({ target: { name, value, checked } }: React.ChangeEvent<HTMLInputElement>) => {
    if (filterOptions === null) return;
    const allOptions = Object.keys(filterOptions[name]);
    const selected = watch(name);
    const allSelected = allOptions.every((option) => selected.includes(option));
    // 當 All 選擇時,將所有選項都加入，反之將所有選項都移除
    // 當 所有其他選項都被選擇時，將 All 選項加入
    // 當 任一其他選項不被選擇時，將 All 選項移除
    return allSelected || value === all.key ? (checked ? [all.key, ...allOptions] : []) : selected.filter((option) => option !== all.key);
  };
  const createQueryString = ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, JSON.stringify(watch(name)));
    return params.toString();
  };
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const options = filterOptionLogic(e);
    if (!options) return;
    setValue(e.target.name, options);
    console.log(createQueryString(e));
  };
  useEffect(() => {
    startTransition(async () => setFilterOptions(await clientFetch.basic.filterOptions()));
  }, []);
  return isPending || filterOptions === null ? (
    <Spinner />
  ) : (
    <>
      {Object.entries(filterOptionLabels).map(([key, legend], i) => (
        <Fragment key={key}>
          <CheckboxGroup legend={legend} legendKey={key} options={filterOptions[key]} register={register} onChange={onChange} />
          {i !== Object.keys(filterOptionLabels).length - 1 && <Hr />}
        </Fragment>
      ))}
    </>
  );
};

type CheckboxGroupProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  legend: string;
  legendKey: string;
};
const CheckboxGroup: React.FC<CheckboxGroupProps<FilterForm> & { options: { [key: string]: string } }> = ({ legend, legendKey, options, register, onChange }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="bg-inherit">
      <div className="sticky top-[calc(var(--text-xl)_*1.75_+_var(--spacing)_*_4.5)] bg-gradient-to-b from-filter-options via-filter-options via-60% to-transparent pb-5">
        <div className="text-white/80 font-medium flex justify-between items-center cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
          {legend}
          <div className="size-5 bg-white/6 rounded-sm">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <div className={clsx("grid transition-[grid-template-rows] duration-400", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden flex md:flex-col gap-5 flex-wrap md:flex-nowrap">
          {[all, ...Object.entries(options).map(([key, label]) => ({ key, label }))].map((option) => (
            <Checkbox key={`${legend}-${option.key}`} legend={legendKey} label={option.label} value={option.key} register={register} onChange={onChange} defaultChecked />
          ))}
        </div>
      </div>
    </div>
  );
};
