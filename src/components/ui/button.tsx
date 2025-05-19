import clsx from "clsx";
import { Button } from "@headlessui/react";

type CustomButtonProps = { children?: React.ReactNode; component?: React.ElementType; className?: string; loading?: boolean; onClick?: () => void; href?: string | URL };
export const CustomButton: React.FC<CustomButtonProps> = ({ component: Component = Button, className, loading, children, ...rest }) => {
  return (
    <Component className={clsx(className, "cursor-pointer", loading && "cursor-not-allowed")} {...rest}>
      {children}
    </Component>
  );
};
