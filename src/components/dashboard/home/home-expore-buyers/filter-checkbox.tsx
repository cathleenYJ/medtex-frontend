import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Hr } from "@ui/splitter";
import { Spinner } from "@ui/loading";
import { clientFetch } from "@/data/client";
import type { FilterForm, FilterOptionType } from "@/types";
import { Checkbox } from "@ui/form";

export const CheckboxGroups: React.FC = () => {
  const [filterOptions, setFilterOptions] = useState<FilterOptionType[]>([]);
  const { register, watch, setValue } = useForm<FilterForm>();
  const onChange = async ({ target: { name, value, checked } }: React.ChangeEvent<HTMLInputElement>) => {
    const allOptions = filterOptions.find(({ legend }) => legend === name)?.options || [];
    const selected = watch(name);
    const allSelected = allOptions.every((option) => selected.includes(option));
    // 當 All 選擇時,將所有選項都加入，反之將所有選項都移除
    // 當 所有其他選項都被選擇時，將 All 選項加入
    // 當 任一其他選項不被選擇時，將 All 選項移除
    setValue(name, allSelected || value === "All" ? (checked ? ["All", ...allOptions] : []) : selected.filter((option) => option !== "All"));
  };
  useEffect(() => {
    (async () => setFilterOptions(await clientFetch.basic.filterOptions()))();
  }, []);
  return filterOptions.length === 0 ? (
    <Spinner />
  ) : (
    <>
      {filterOptions.map((props, i) => (
        <Fragment key={props.legend}>
          <CheckboxGroup {...props} register={register} onChange={onChange} />
          {i !== filterOptions.length - 1 && <Hr />}
        </Fragment>
      ))}
    </>
  );
};

type CheckboxGroupProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  legend: string;
};
const CheckboxGroup: React.FC<CheckboxGroupProps<FilterForm> & { options: string[] }> = ({ legend, options, register, onChange }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white/80 font-medium flex justify-between items-center cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        {legend}
        <div className="size-5 bg-white/6 rounded-sm">
          <ChevronDownIcon />
        </div>
      </div>
      <div className={clsx("grid transition-[grid-template-rows] duration-400", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden flex flex-col gap-5">
          {["All", ...options].map((option) => (
            <Checkbox key={option} option={option} legend={legend} register={register} onChange={onChange} />
          ))}
        </div>
      </div>
    </div>
  );
};
