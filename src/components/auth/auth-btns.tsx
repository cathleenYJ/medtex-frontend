"use client";

import Link from "next/link";
import { Button } from "@headlessui/react";
import { CustomButton } from "@ui/button";
import { useAuthBtn } from "@/hooks/use-auth-btn";

export const AuthBtn: React.FC = () => {
  const { label, key, ...props } = useAuthBtn();
  return (
    <CustomButton
      key={key}
      className="px-6 py-3 bg-b2b-lv4 text-b2b-lv1 rounded-sm text-sm"
      component={props?.href ? Link : Button}
      {...props}
    >
      {label}
    </CustomButton>
  );
};
