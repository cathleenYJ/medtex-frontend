import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useAppSearchParams = () => {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string, clean: boolean = false) => {
      const params = new URLSearchParams(clean ? "" : searchParams?.toString() || "");
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return { createQueryString };
};
