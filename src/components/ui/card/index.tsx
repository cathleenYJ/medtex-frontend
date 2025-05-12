import clsx from "clsx";

export const Card: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return <div className={clsx("rounded-2xl border border-solid border-white/20", className)}>{children}</div>;
};

export const Cards: React.FC<{ grid?: boolean; className?: string; children?: React.ReactNode }> = ({ grid = false, className, children }) => {
  return <div className={clsx("gap-4", grid ? "grid" : "flex flex-wrap", className)}>{children}</div>;
};
