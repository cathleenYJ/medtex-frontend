"use client";

import { Path, SubmitHandler, useForm } from "react-hook-form";
import { Input, Select, Checkboxes, FileUpload } from "@ui/form";
import { fields } from "./buyer-fields";
import type { BuyerForm } from "./buyer-fields";

export default function BuyerForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BuyerForm>();
  const onSubmit: SubmitHandler<BuyerForm> = (data) => {
    console.log(data, errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-4 bg-white">
      BuyerForm
      {fields.map(({ label, type, name, required, options }) => {
        switch (type) {
          case "image":
            return <FileUpload key={name} label={label} type={type} formUpdate={(value: File) => setValue(name, value)} error={errors[name]} />;
          case "select":
            return <Select key={name} label={label} formUpdate={register(name, { required })} error={errors[name]} options={options || []} />;
          case "checkbox":
            return <Checkboxes key={name} legend={label as Path<BuyerForm>} register={register} error={errors[name]} options={options || []} current={watch(name) as string[]} />;
          default:
            return <Input key={name} label={label} type={type} formUpdate={register(name, { required })} error={errors[name]} />;
        }
      })}
      <input className="mt-2 mx-auto w-3xs block rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black" type="submit" />
    </form>
  );
}
