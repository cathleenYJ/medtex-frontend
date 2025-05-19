"use client";

export const LoadingBar: React.FC<{ size?: number; duration?: number }> = ({ size = 0.625, duration = 0.8 }) => {
  return (
    <div className="flex items-center" style={{ gap: `${size}rem`, "--duration": `${duration}s`, "--w": `${size}rem`, "--h": `${size * 7}rem` } as React.CSSProperties}>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-white rounded-full animate-loading w-(--w) h-(--h)" style={{ animationDelay: `${duration * i * 0.1}s` }} />
      ))}
    </div>
  );
};
