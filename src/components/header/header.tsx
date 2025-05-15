"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { SiteLogo } from "@icons";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Splitter } from "@ui/splitter";
import { NestMenu } from "@ui/nested-menu";
import { Loading } from "@ui/loading";
import { useAuth } from "@/hooks/use-auth";
import type { MenuItemType } from "@/types";
import { menuItemsDesktop, menuItemsRest } from "./menu-items";

const HeaderBtnsDesktop = dynamic(() => import("./btn-group").then((mod) => mod.HeaderBtnsDesktop), { ssr: false, loading: () => <Loading /> });

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
    <header className="flex flex-col gap-1 py-3 px-5 sm:px-10 absolute z-50 top-0 w-full backdrop-blur-lg sm:backdrop-blur-none">
      <div className="flex justify-between relative">
        <div className="flex items-end">
          <div className="h-full flex items-end py-1 w-full max-w-4 sm:max-w-44">
            <Link href="/">
              <SiteLogo />
            </Link>
          </div>
          <Splitter className="mx-3" />
          <div className="h-full flex items-end text-white font-bold text-[0.9375rem] sm:text-base md:text-lg">Business Matchmaking</div>
        </div>
        <MobileMenu items={[...menuItemsDesktop, ...menuItemsRest, isAuthorized ? signedInItem : signedOutItem]} />
        <HeaderBtnsDesktop item={isAuthorized ? signedInItem : signedOutItem} />
      </div>
      <div className="my-2 h-px bg-white/20 -mx-5 sm:-mx-10"></div>
      <DesktopMenu items={[...menuItemsDesktop, ...menuItemsRest]} />
    </header>
  );
};

const MobileMenu: React.FC<{ items: MenuItemType[] }> = ({ items }) => (
  <NestMenu
    className="sm:hidden inline-block"
    btn={
      <div className="w-6 h-6 cursor-pointer text-white">
        <Bars3Icon />
      </div>
    }
    items={items}
  />
);

const DesktopMenu: React.FC<{ items: MenuItemType[] }> = ({ items }) => (
  <div className="hidden sm:flex sm:flex-wrap">
    {items.map((item, i) => (
      <Fragment key={item.key}>
        <NestMenu
          items={[item]}
          btn={
            <>
              <span className="text-white/80">{item.label}</span>
              <ChevronDownIcon className="size-4 text-white/80" />
            </>
          }
        />
        {i !== items.length - 1 && <Splitter className="mx-[1.875rem] md:mx-[3.125rem]" />}
      </Fragment>
    ))}
  </div>
);
