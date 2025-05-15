import clsx from "clsx";
import { Card } from "@ui/card";

export const ProfileCard: React.FC<{ className?: string; icon?: React.ReactNode; title?: React.ReactNode; children?: React.ReactNode }> = ({ icon, className, title, children }) => {
  return (
    <Card className={clsx("py-8 px-6 sm:p-[1.875rem] md:p-10 flex flex-col gap-5 sm:gap-[1.875rem]", className)}>
      <div className="flex flex-row sm:flex-col gap-2.5">
        {icon && <div className="w-10 h-10 flex items-center">{icon}</div>}
        {title && <div className="text-2xl font-medium">{title}</div>}
      </div>
      {children}
    </Card>
  );
};
