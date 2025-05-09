import clsx from "clsx";

export const SectionTitle: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return <h3 className={clsx("text-white text-3xl", className)}>{children}</h3>;
};
