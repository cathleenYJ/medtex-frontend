"use client";

import Link from "next/link";
import { Button } from "@headlessui/react";
import { CustomButton } from "@ui/button";
import type { MenuItemType } from "@/types";

export const HeaderBtnsDesktop: React.FC<{ item: MenuItemType }> = ({ item: { label, key, ...props } }) => {
  return (
    <div className="hidden sm:block">
      <div className="flex items-end gap-6">
        <CustomButton className="px-6 py-3 bg-forth text-white rounded-sm text-sm" component={props.href ? Link : Button} {...props}>
          {label}
        </CustomButton>
      </div>
    </div>
  );
};
