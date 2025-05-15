import { countries } from "@/data/countries";
import { MenuItemType } from "@/types";

export const menuItemsDesktop: MenuItemType[] = [
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

export const menuItemsRest: MenuItemType[] = [
  {
    key: "Pages",
    label: "Pages",
    items: [
      { key: "Profile_green", label: "Profile green", href: "/profile/1" },
      { key: "Profile_blue", label: "Profile blue", href: "/profile/2" },
      { key: "Profile_red", label: "Profile red", href: "/profile/3" },
      { key: "calendar", label: "calendar", href: "/admin" },
    ],
  },
];
