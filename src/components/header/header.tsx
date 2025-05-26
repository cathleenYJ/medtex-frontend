"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { SiteLogo } from "@icons";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Hr, Splitter } from "@ui/splitter";
import { NestMenu } from "@ui/nested-menu";
import { Spinner } from "@ui/loading";
import { useAuth } from "@/hooks/use-auth";
import { Routes } from "@/config/routes";
import type { MenuItemType } from "@/types";
import { menuItemsDesktop, menuItemsRest } from "./menu-items";

const HeaderBtnsDesktop = dynamic(() => import("./btn-group").then((mod) => mod.HeaderBtnsDesktop), { ssr: false, loading: () => <Spinner /> });

export const Header: React.FC = () => {
  const pathname = usePathname();
  const targetPage = pathname ? `?redirect=${encodeURIComponent(pathname)}` : "";
  const { unauthorize, isAuthorized } = useAuth();
  const signedInItem = {
    key: "logout",
    label: "Logout",
    onClick: unauthorize,
  };
  const signedOutItem = {
    key: Routes.auth.signIn,
    label: "Login",
    href: `${Routes.auth.signIn}${targetPage}`,
  };
  return (
    <header className="flex flex-col gap-1 py-3 px-5 sm:px-10 absolute z-50 top-0 w-full backdrop-blur-lg sm:backdrop-blur-none">
      <div className="flex justify-between relative">
        <div className="flex items-end">
          <div className="h-full flex items-end py-1 w-full max-w-4 sm:max-w-44">
            <Link href={Routes.public.home}>
              <SiteLogo />
            </Link>
          </div>
          <Splitter className="mx-3" />
          <div className="h-full flex items-end text-white font-bold text-[0.9375rem] sm:text-base md:text-lg">
            <Link href={Routes.public.home}>Business Matchmaking</Link>
          </div>
        </div>
        <MobileMenu items={[...menuItemsDesktop, ...menuItemsRest, isAuthorized ? signedInItem : signedOutItem]} />
        <HeaderBtnsDesktop item={isAuthorized ? signedInItem : signedOutItem} />
      </div>
      <Hr className="my-2 -mx-5 sm:-mx-10" />
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

const DesktopMenu: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
  return (
    <div className="hidden sm:flex sm:flex-wrap">
      {items.map((item, i) => (
        <Fragment key={item.key}>
          <NestMenu
            items={item.items || []}
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
};
