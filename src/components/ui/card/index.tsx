import clsx from "clsx";

export const Card: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return <div className={clsx("rounded-2xl border border-solid border-white/20", className)}>{children}</div>;
};

export const Cards: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return <div className={clsx("flex flex-wrap gap-4", className)}>{children}</div>;
};
