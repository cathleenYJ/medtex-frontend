import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MenuItemType } from "@/types";
import { Splitter } from "@ui/splitter";

export const DropdownMenu: React.FC<MenuItemType & { className?: string; last: boolean }> = ({ label, items, last, className }) => {
  return (
    <>
      <Menu as="div" className={className}>
        <MenuButton className="inline-flex items-center gap-3 cursor-pointer text-white">
          {label}
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>
        <MenuItems transition anchor="bottom" className="w-52 backdrop-blur-lg origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0">
          {items &&
            items.map(({ label, href }) => (
              <MenuItem key={href}>
                {href && (
                  <Link href={href} className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                    {label}
                  </Link>
                )}
              </MenuItem>
            ))}
        </MenuItems>
      </Menu>
      {!last && <Splitter className="mx-12" />}
    </>
  );
};
