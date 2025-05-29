import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import { FieldError, Merge } from "react-hook-form";
import Resizer from "react-image-file-resizer";
import { useModal } from "@/components/modals/context";

export type FileUploadProps = {
  label: string;
  type: string;
  formUpdate: (value: File) => void;
  error: FieldError | Merge<FieldError, (FieldError | undefined)[]> | undefined;
  required?: boolean;
};
export const FileUpload: React.FC<FileUploadProps> = ({ label, type, formUpdate, error, required = false }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { openModal } = useModal();
  const compress = async (file: File): Promise<File> => await new Promise((resolve) => Resizer.imageFileResizer(file, 1080, 1080, "webp", 100, 0, (uri) => resolve(uri as File), "file"));
  const handleUploadedFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !inputRef.current) return;
    const file = event.target.files[0];
    if (!new RegExp(`${type}/`).test(file.type)) return openModal("Invalid file type");
    const image = /svg$|webp$/g.test(file.name) ? file : await compress(file);
    setPreview(URL.createObjectURL(image));
    formUpdate(image);
  };
  return (
    <fieldset>
      <legend>{label}</legend>
      <label>
        <div tabIndex={0} className={clsx("relative mt-2 block rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-black", "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25", "w-3xs cursor-pointer flex justify-center items-center", error && "outline-2 outline-red-500")}>
          {preview ? <Image fill className="!relative" src={preview} alt="preview" /> : <div>Upload Image</div>}
        </div>
        <input className="w-0 h-0 opacity-0" type="file" onChange={handleUploadedFile} ref={inputRef} required={required} />
      </label>
    </fieldset>
  );
};
