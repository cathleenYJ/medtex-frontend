import clsx from "clsx";

export const Splitter: React.FC<{ className?: string }> = ({ className }) => <div className={clsx("h-4 w-px my-1 bg-white/50", className || "mx-2")} />;

export const BlockSplitter: React.FC = () => <div className="w-full sm:w-px h-px sm:h-full bg-white/20" />;
