"use client";

import { NestMenu } from "@ui/nested-menu";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useAuthBtn } from "@/hooks/use-auth-btn";
import type { MenuItemType } from "@/types";

export const MobileMenu: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
  const authBtn = useAuthBtn();
  return (
    <NestMenu
      className="sm:hidden inline-block"
      btn={
        <div className="w-6 h-6 cursor-pointer text-white">
          <Bars3Icon />
        </div>
      }
      items={[...items, authBtn]}
    />
  );
};
