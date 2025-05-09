import clsx from "clsx";

export const Tag: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => <div className={clsx(className, "bg-white/10 rounded-xl text-white px-3.5 py-1.5 w-max")}>{children}</div>;
