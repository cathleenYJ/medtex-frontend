import clsx from "clsx";

export const ProfileContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const circleLeft = "before:content-[''] before:block before:absolute before:aspect-square before:rounded-full before:blur-[250px] before:w-[666px] before:bg-circle-left before:top-0 before:translate-x-[-50%] before:translate-y-[50%] before:z-[-1]";
  const circleRight = "after:content-[''] after:block after:absolute after:aspect-square after:rounded-full after:blur-[250px] after:w-[666px] after:bg-circle-right after:top-0 after:right-0 after:translate-x-[50%] after:translate-y-[120%] after:z-[-1]";
  return <div className={clsx("relative mx-auto w-full max-w-7xl py-24 px-2.5 font-light flex flex-col gap-20", circleLeft, circleRight)}>{children}</div>;
};
