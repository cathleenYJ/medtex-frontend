import clsx from "clsx";
import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";
import { Field, Fieldset, Legend, Input, Label } from "@headlessui/react";

export type CustomCheckboxProps = {
  label: string;
  formUpdate: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, (FieldError | undefined)[]> | undefined;
  options: string[];
  current: string[];
};
export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, formUpdate, error, options, current }) => {
  const onChange = () => {};
  return (
    <Fieldset>
      <Legend>{label}</Legend>
      {[...options, "other"].map((option) => (
        <Field key={`${formUpdate.name}-${option}`}>
          <label>
            <input className={clsx("mt-2 block rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black", "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25", error && "outline-2 outline-red-500")} type="checkbox" {...formUpdate} value={option} />
            <div className={clsx("flex items-center gap-2")}>{option}</div>
          </label>
        </Field>
      ))}
      {current && current.includes("other") && (
        <Field className="page-input d-flex">
          <Label>
            <Input className="d-block" type="text" placeholder="please specify" onChange={onChange} required={formUpdate.required} />
          </Label>
        </Field>
      )}
    </Fieldset>
  );
};
