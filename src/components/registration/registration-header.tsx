import React from "react";
import clsx from "clsx";
import { BannerContainer } from "@ui/banner-container";

interface RegistrationHeaderProps {
  title: string;
  className?: string;
}

export function RegistrationHeader({ title, className }: RegistrationHeaderProps) {
  return (
    <BannerContainer
      className={clsx("relative min-h-[10vh] flex flex-col justify-center items-center text-white py-20 px-6 text-center", className)}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
      </div>
    </BannerContainer>
  );
}
