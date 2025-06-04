import clsx from "clsx";

export const Card: React.FC<{
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
  theme?: string;
  onClick?: () => void;
}> = ({ className, styles, children, theme, onClick }) => {
  return (
    <div
      style={styles}
      className={clsx(
        "rounded-2xl border border-solid border-white/20",
        className
      )}
      data-card-theme={theme}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Cards: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => {
  return <div className={clsx("flex", className)}>{children}</div>;
};
