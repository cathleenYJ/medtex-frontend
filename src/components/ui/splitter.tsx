import clsx from "clsx";

export const Splitter: React.FC<{ className?: string }> = ({ className }) => <div className={clsx("h-4 w-px my-1 bg-white/50", className || "mx-2")} />;

export const Hr: React.FC<{ className?: string }> = ({ className }) => <hr className={clsx("h-px border-white/20", className)} />;
