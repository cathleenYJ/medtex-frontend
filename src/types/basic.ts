export type FilterOptionType = { legend: string; options: string[] };
export type RecommandedItem = { id: number; position?: "top" | "bottom" | "center"; theme: "a" | "b" | "c"; image?: string; name: string; date?: string };
export type FilterForm = { [key: string]: string[] };
