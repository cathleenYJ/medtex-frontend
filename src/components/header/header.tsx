import Link from "next/link";
import { SiteLogo } from "@icons";
import { Hr, Splitter } from "@ui/splitter";
import { Routes } from "@/config/routes";
import { MobileMenu } from "./mobile/mobile-menu";
import { DesktopMenu } from "./desktop/desktop-menu";
import { DesktopBtns } from "./desktop/desktop-btns";
import { menuItemsMain, menuItemsRest } from "./menu-items";

export const Header: React.FC = async () => {
  const desktopItems = await menuItemsMain();
  const restItems = await menuItemsRest();
  return (
    <header className="flex flex-col gap-1 py-3 px-5 sm:px-10 absolute z-50 top-0 w-full backdrop-blur-lg sm:backdrop-blur-none">
      <div className="flex justify-between items-center relative">
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
        <MobileMenu items={[...desktopItems, ...restItems]} />
        <DesktopBtns />
      </div>
      <Hr className="my-2 -mx-5 sm:-mx-10" />
      <DesktopMenu items={[...desktopItems, ...restItems]} />
    </header>
  );
};
