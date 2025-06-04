import { Routes } from "@/config/routes";
import { serverFetch } from "@/data/server";
import { filterOptionLabels } from "@/utils/filter-form";
import type { FilterOptionType, MenuItemType } from "@/types";

const getItems = (data: FilterOptionType, name: string) => {
  return Object.entries(data[name]).map(([key, value]) => {
    const searchParams = new URLSearchParams();
    searchParams.set(name, JSON.stringify([key]));
    return {
      key,
      label: value,
      href: `${Routes.public.result}?${searchParams.toString()}`,
    };
  });
};

export const menuItemsMain = async (): Promise<MenuItemType[]> => {
  const data = await serverFetch.basic.filterOptions();
  return Object.entries(filterOptionLabels).map(([key, label]) => ({
    key,
    label,
    items: getItems(data, key),
  }));
};

export const menuItemsRest = async (): Promise<MenuItemType[]> => [
  {
    key: "Pages",
    label: "Pages",
    items: [
      {
        key: "Profile_green",
        label: "Profile green",
        href: `${Routes.public.profile}/1`,
      },
      {
        key: "Profile_blue",
        label: "Profile blue",
        href: `${Routes.public.profile}/2`,
      },
      {
        key: "Profile_red",
        label: "Profile red",
        href: `${Routes.public.profile}/3`,
      },
      { key: "calendar", label: "calendar", href: Routes.private.admin },
      { key: "form", label: "form", href: Routes.private.form },
      { key: "result", label: "result", href: Routes.public.result },
    ],
  },
];
