import clsx from "clsx";
import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";

export type CustomSelectProps = {
  label: string;
  formUpdate: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, (FieldError | undefined)[]> | undefined;
  options: string[];
};
export const Select: React.FC<CustomSelectProps> = ({
  label,
  formUpdate,
  error,
  options,
}) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <label>
        <select
          className={clsx(
            "mt-2 block rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25",
            error && "outline-2 outline-red-500"
          )}
          {...formUpdate}
          defaultValue={options[0]}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </fieldset>
  );
};
