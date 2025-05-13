export const ProfileContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="relative w-full max-w-7xl mx-auto py-24 px-2.5 font-light flex flex-col gap-20">
        <div className="absolute inset-0 overflow-y-clip -z-10">
          <div className="block absolute aspect-square rounded-full blur-[250px] w-[666px] max-w-full top-0 translate-x-[-50%] translate-y-[50%] z-[-1] bg-circle-left"></div>
          <div className="block absolute aspect-square rounded-full blur-[250px] w-[666px] max-w-full top-0 right-0 translate-x-[50%] translate-y-[120%] z-[-1]  bg-circle-right"></div>
          <div className="block absolute aspect-2/1 rounded-full blur-[250px] w-[1000px] max-w-3/5 left-1/2 -translate-x-1/2 bottom-2/12 z-[-1] bg-circle-middle"></div>
          <div className="block absolute aspect-2/1 rounded-full blur-[250px] w-11/12 left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 z-[-1] bg-circle-right"></div>
        </div>
        {children}
      </div>
    </div>
  );
};
