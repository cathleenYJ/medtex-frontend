import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Hr } from "@ui/splitter";
import { Spinner } from "@ui/loading";
import { clientFetch } from "@/data/client";
import type { FilterForm, FilterOptionType } from "@/types";

export const CheckboxGroups: React.FC = () => {
  const { register, watch, setValue, subscribe } = useForm<FilterForm>();
  const onChange = async ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    console.log(name, watch(name));
  };
  const [filterOptions, setFilterOptions] = useState<FilterOptionType[]>([]);
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
            <CheckOption key={option} option={option} legend={legend} register={register} onChange={onChange} />
          ))}
        </div>
      </div>
    </div>
  );
};

type CheckOptionProps = CheckboxGroupProps<FilterForm> & { option: string };
const CheckOption: React.FC<CheckOptionProps> = ({ legend, option, register, onChange }) => {
  return (
    <label className="flex gap-1.5 select-none">
      <input type="checkbox" value={option} {...register(legend, { onChange })} />
      <div className="text-white/70">{option}</div>
    </label>
  );
};
