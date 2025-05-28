import clsx from "clsx";

export const CompanyLogo: React.FC<{ className?: string; src: string; alt?: string }> = ({ className, src, alt }) => (
  <div className={clsx("flex items-center shrink-0", className)}>
    <img src={src} alt={alt} />
  </div>
);
