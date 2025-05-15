import clsx from "clsx";

export const Tag: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  const defaultClassName = "bg-white/10 rounded-xl text-white px-3.5 py-1.5 w-max text-sm sm:text-base".split(" ");
  const cleanDuplicate = () => (className ? defaultClassName.filter((d) => !new RegExp(d.match(/(\S+-)/)?.[0] || "").test(className)) : defaultClassName);
  return <div className={clsx(className, ...cleanDuplicate())}>{children}</div>;
};
