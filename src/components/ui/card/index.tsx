import clsx from "clsx";

export const Card: React.FC<{ className?: string; styles?: React.CSSProperties; children?: React.ReactNode }> = ({ className, styles, children }) => {
  return (
    <div style={styles} className={clsx("rounded-2xl border border-solid border-white/20", className)}>
      {children}
    </div>
  );
};

export const Cards: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className, children }) => {
  return <div className={clsx("flex flex-wrap", className)}>{children}</div>;
};
