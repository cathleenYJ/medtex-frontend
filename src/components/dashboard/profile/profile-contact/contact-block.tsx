export const ContactBlock: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="xl:basis-(--1\/2-basis-gap-overview) basis-full flex flex-col gap-5">
    <div>{title}</div>
    <div className="text-xl font-medium">{children}</div>
  </div>
);
