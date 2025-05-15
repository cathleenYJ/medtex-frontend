import clsx from "clsx";
import { Card } from "@ui/card";

export const ProfileCard: React.FC<{ className?: string; icon?: React.ReactNode; title?: React.ReactNode; children?: React.ReactNode }> = ({ icon, className, title, children }) => {
  return (
    <Card className={clsx("py-8 px-6 sm:p-[1.875rem] md:p-10 flex flex-col gap-5 sm:gap-[1.875rem]", className)}>
      <div className="flex md:flex-wrap gap-2.5 items-center">
        {icon && <div className="w-[1.75rem] sm:w-[2.25rem] aspect-square flex items-center">{icon}</div>}
        {title && (
          <div className="md:basis-full text-base sm:text-xl font-medium flex items-center">
            <div>{title}</div>
          </div>
        )}
      </div>
      {children}
    </Card>
  );
};
