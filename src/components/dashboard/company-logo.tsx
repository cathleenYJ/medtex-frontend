export const CompanyLogo: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <div className="flex items-center max-w-36">
    <img src={src} alt={alt} />
  </div>
);
