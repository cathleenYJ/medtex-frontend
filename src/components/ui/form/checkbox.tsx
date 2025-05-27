import clsx from "clsx";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Field, Fieldset, Legend, Input, Label } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";

export type CheckboxesProps<T extends FieldValues> = {
  legend: Path<T>;
  register: UseFormRegister<T>;
  options: string[];
  current: string[];
  error?: FieldErrors<T>;
  required?: boolean;
};
export const Checkboxes = <T extends FieldValues>({ legend, register, options, current, error, required }: CheckboxesProps<T>) => {
  const onChange = () => {};
  return (
    <Fieldset>
      <Legend>{legend}</Legend>
      {[...options, "other"].map((option) => (
        <Field key={`${legend}-${option}`}>
          <Checkbox option={option} legend={legend} register={register} onChange={onChange} error={error} required={required} />
        </Field>
      ))}
      {current && current.includes("other") && (
        <Field className="page-input d-flex">
          <Label>
            <Input className="d-block" type="text" placeholder="please specify" onChange={onChange} required={required} />
          </Label>
        </Field>
      )}
    </Fieldset>
  );
};

type CheckboxProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  legend: Path<T>;
  option: string;
  error?: FieldErrors<T>;
  required?: boolean;
};
export const Checkbox = <T extends FieldValues>({ legend, option, register, onChange, error, required }: CheckboxProps<T>) => {
  return (
    <label className={clsx("flex items-center gap-1.5 select-none cursor-pointer", error && "outline-2 outline-red-500")}>
      <input className="peer hidden" type="checkbox" value={option} {...register(legend, { onChange, required })} />
      <div className="rounded-[0.1875rem] overflow-hidden size-4 border border-checkbox-border bg-checkbox-bg *:opacity-0 peer-checked:*:opacity-100">
        <CheckIcon className="bg-white" />
      </div>
      <div className="text-white/70">{option}</div>
    </label>
  );
};
