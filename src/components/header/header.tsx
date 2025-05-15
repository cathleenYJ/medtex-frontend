"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteLogo } from "@icons";
import { Splitter } from "@ui/splitter";
import { DropdownMenu, NestMenu } from "@ui/menus";
import { countries } from "@/data/countries";
import { useAuth } from "@/hooks/use-auth";
import type { MenuItemType } from "@/types";
import { HeaderBtnsWeb } from "./btn-group";

const menuItemsWeb: MenuItemType[] = [
  {
    key: "Country / Region",
    label: "Country / Region",
    items: countries.map(({ label, code }) => ({ key: label, label: label, href: `/result?company_location=${code}` })),
  },
  {
    key: "Partnership Types",
    label: "Partnership Types",
    items: [{ key: "技術合作", label: "技術合作", href: "/result?partnership_looking_for=技術合作" }],
  },
  {
    key: "Industry",
    label: "Industry",
    items: [{ key: "先進材料", label: "先進材料", href: "/result?industry_classification=先進材料" }],
  },
];

const menuItemsRest: MenuItemType[] = [
  {
    key: "Result",
    label: "Result",
    href: "/result",
  },
  {
    key: "Profile",
    label: "Profile",
    href: "/profile/1",
  },
  {
    key: "test",
    label: "test",
    items: [{ key: "test2", label: "test2", items: [{ key: "test3", label: "test3", href: "/" }] }],
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { unauthorize, isAuthorized } = useAuth();
  const signedInItem = {
    key: "sign-out",
    label: "登出",
    onClick: unauthorize,
  };
  const signedOutItem = {
    key: "sign-in",
    label: "登入 / 註冊",
    href: `/sign-in?redirect=${pathname}`,
  };
  return (
    <header className="flex flex-col gap-1 py-5 absolute z-50 top-0 w-full backdrop-blur-lg sm:backdrop-blur-none">
      <div className="flex justify-between mx-5 sm:mx-24 relative">
        <div className="flex items-end">
          <div className="h-full flex items-end py-1 w-full max-w-4 sm:max-w-44">
            <Link href="/">
              <SiteLogo />
            </Link>
          </div>
          <Splitter className="mx-3" />
          <div className="h-full flex items-end text-white font-bold text-lg">Business Matchmaking</div>
        </div>
        <NestMenu className="sm:hidden inline-block" items={[...menuItemsWeb, ...menuItemsRest, isAuthorized ? signedInItem : signedOutItem]} />
        <HeaderBtnsWeb />
      </div>
      <div className="hidden sm:block my-2 h-px bg-white/20"></div>
      <div className="hidden sm:flex mx-24">
        {menuItemsWeb.map(({ label, items }, i) => (
          <DropdownMenu key={`web-${label}`} label={label} items={items} last={i === menuItemsWeb.length - 1} />
        ))}
      </div>
    </header>
  );
};
