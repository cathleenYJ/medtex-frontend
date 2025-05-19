export type MenuItemType = { key: string; label: React.ReactNode; href?: string | URL; onClick?: () => void; items?: MenuItemType[] };
