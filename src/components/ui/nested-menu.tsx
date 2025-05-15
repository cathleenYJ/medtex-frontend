"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CustomButton } from "@ui/button";
import type { MenuItemType } from "@/types";

export const NestMenu: React.FC<{ items: MenuItemType[]; btn: React.ReactNode; className?: string }> = ({ btn, items, className }) => {
  return (
    <Menu as="div" className={clsx("relative text-left", className || "inline-block")}>
      <div className="flex items-end">
        <MenuButton className="inline-flex items-end gap-3 cursor-pointer text-white">{btn}</MenuButton>
      </div>
      <MenuItems transition anchor="bottom start" className={clsx("absolute z-50 right-0 mt-2 w-max max-w-full min-w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", "origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0")}>
        {items.map(({ key, items: subItems, ...props }) => (
          <NestItems key={key} items={subItems} {...props} />
        ))}
      </MenuItems>
    </Menu>
  );
};

const renderNestItems = (label: React.ReactNode, submenuVisible: boolean, subMenuToggle: (e: React.MouseEvent<HTMLButtonElement>) => void, close: () => void, href?: string, onClick?: () => void, items?: MenuItemType[]) => {
  if (items) {
    return <ExpandBtn label={label} submenuVisible={submenuVisible} onClick={subMenuToggle} />;
  } else if (href) {
    return <MenuLink label={label} href={href} close={close} />;
  } else if (onClick) {
    return <MenuBtn label={label} onClick={onClick} close={close} />;
  } else {
    return <></>;
  }
};

type NestItemsProps = { label: React.ReactNode; href?: string; onClick?: () => void; items?: MenuItemType[] };
const NestItems: React.FC<NestItemsProps> = ({ label, href, onClick, items }) => {
  const [submenuVisible, setSubmenuVisible] = useState<boolean>(false);
  const subMenuToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmenuVisible((prev) => !prev);
  };
  return (
    <>
      <div className="px-1 py-1 max-h-[50vh] overflow-y-auto">
        <MenuItem>{({ close }) => renderNestItems(label, submenuVisible, subMenuToggle, close, href, onClick, items)}</MenuItem>
      </div>
      {items && submenuVisible && (
        <div className="px-1 py-1 max-h-[50vh] overflow-y-auto">
          {items.map(({ key, ...props }) => (
            <NestItems key={key} {...props} />
          ))}
        </div>
      )}
    </>
  );
};

type ExpandBtnProps = { label: React.ReactNode; submenuVisible: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void };
const ExpandBtn: React.FC<ExpandBtnProps> = ({ label, submenuVisible, onClick }) => {
  return (
    <button className={clsx("hover:bg-violet-500 hover:text-white", "text-gray-900", "group w-full rounded-md px-2 py-2 text-sm flex items-center")} onClick={onClick}>
      {!submenuVisible ? (
        <>
          {label}
          <ChevronRightIcon className="h-5 w-5 mr-2" />
        </>
      ) : (
        <>
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          {label}
        </>
      )}
    </button>
  );
};

type MenuLinkProps = { label: React.ReactNode; href: string; close: () => void };
const MenuLink: React.FC<MenuLinkProps> = ({ label, href, close }) => (
  <Link href={href} onClick={close} className={clsx("hover:bg-violet-500 hover:text-white", "text-gray-900", "group flex w-full items-center rounded-md px-2 py-2 text-sm")}>
    {label}
  </Link>
);

type MenuBtnProps = { label: React.ReactNode; onClick: () => void; close: () => void };
const MenuBtn: React.FC<MenuBtnProps> = ({ label, onClick, close }) => {
  const handleClick = () => {
    close();
    onClick();
  };
  return (
    <CustomButton onClick={handleClick} className={clsx("hover:bg-violet-500 hover:text-white", "text-gray-900", "group flex w-full items-center rounded-md px-2 py-2 text-sm")}>
      {label}
    </CustomButton>
  );
};
