export const ProfileContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto py-24 px-2.5 font-light flex flex-col gap-20">{children}</div>;
};
