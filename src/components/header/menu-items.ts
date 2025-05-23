import { Routes } from "@/config/routes";
import { countries } from "@/data/countries";
import { MenuItemType } from "@/types";

export const menuItemsDesktop: MenuItemType[] = [
  {
    key: "Country / Region",
    label: "Country / Region",
    items: countries.map(({ label, code }) => ({ key: label, label: label, href: `${Routes.public.result}?company_location=${code}` })),
  },
  {
    key: "Partnership Types",
    label: "Partnership Types",
    items: [{ key: "技術合作", label: "技術合作", href: `${Routes.public.result}?partnership_looking_for=技術合作` }],
  },
  {
    key: "Industry",
    label: "Industry",
    items: [{ key: "先進材料", label: "先進材料", href: `${Routes.public.result}?industry_classification=先進材料` }],
  },
];

export const menuItemsRest: MenuItemType[] = [
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
