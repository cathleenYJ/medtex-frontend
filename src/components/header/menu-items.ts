import { Routes } from "@/config/routes";
import { clientFetch } from "@/data/client";
import type { FilterOptionType, MenuItemType } from "@/types";

const getItems = (data: FilterOptionType, name: string) => Object.entries(data[name]).map(([key, value]) => ({ key, label: value, href: `${Routes.public.result}?${name}=${key}` }));

export const menuItemsDesktop = async (): Promise<MenuItemType[]> => {
  const data = await clientFetch.basic.filterOptions();
  return [
    {
      key: "Country / Region",
      label: "Country / Region",
      items: getItems(data, "region_covered"),
    },
    {
      key: "Partnership Types",
      label: "Partnership Types",
      items: getItems(data, "partnership_looking_for"),
    },
    {
      key: "Industry",
      label: "Industry",
      items: getItems(data, "purchasing_requirement"),
    },
  ];
};

export const menuItemsRest = async (): Promise<MenuItemType[]> => [
  {
    key: "Pages",
    label: "Pages",
    items: [
      { key: "Profile_green", label: "Profile green", href: `${Routes.public.profile}/1` },
      { key: "Profile_blue", label: "Profile blue", href: `${Routes.public.profile}/2` },
      { key: "Profile_red", label: "Profile red", href: `${Routes.public.profile}/3` },
      { key: "calendar", label: "calendar", href: Routes.private.admin },
      { key: "form", label: "form", href: Routes.private.form },
      { key: "result", label: "result", href: Routes.public.result },
    ],
  },
];
