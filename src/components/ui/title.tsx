import clsx from "clsx";
import { headerSans } from "@/styles/font";

export const SectionTitle: React.FC<{ id?: string; className?: string; children?: React.ReactNode }> = ({ id, className, children }) => {
  return (
    <h3 id={id?.replace(" ", "_")} className={clsx("text-white text-xl sm:text-[2rem]", className, headerSans.variable)}>
      {children}
    </h3>
  );
};
