interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section className={`py-16 px-6 ${className || ''}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
