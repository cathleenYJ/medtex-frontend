import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NestMenu } from "@ui/nested-menu";
import { Splitter } from "@ui/splitter";
import type { MenuItemType } from "@/types";

export const DesktopMenu: React.FC<{ items: MenuItemType[] }> = ({ items }) => {
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
