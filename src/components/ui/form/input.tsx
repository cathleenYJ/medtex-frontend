import clsx from "clsx";
import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";
import {
  Field,
  Fieldset,
  Legend,
  Input as HeadlessInput,
  Label,
} from "@headlessui/react";

export type InputProps = {
  label: string;
  type: string;
  formUpdate: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, (FieldError | undefined)[]> | undefined;
};
export const Input: React.FC<InputProps> = ({
  label,
  type,
  formUpdate,
  error,
}) => {
  return (
    <Fieldset>
      <Legend>{label}</Legend>
      <Field>
        <Label>
          <HeadlessInput
            type={type}
            className={clsx(
              "mt-2 block rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25",
              error && "outline-2 outline-red-500"
            )}
            {...formUpdate}
          />
        </Label>
      </Field>
    </Fieldset>
  );
};
