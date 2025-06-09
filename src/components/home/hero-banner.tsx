"use client";

import { useRef } from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Conference } from "@/types/medtex";
import { BannerContainer } from "@/components/ui/banner-container";
import Link from "next/link";
import { Routes } from "@/config/routes";
import { CustomButton } from "@ui/button";
import { ArrowDownCircle } from "@icons";

const KEYNOTE_SPEAKERS_ID = "Speakers";

interface HeroBannerProps {
  conference: Conference;
}

export const HeroBanner = ({ conference }: HeroBannerProps) => {
  const registerRef = useRef<HTMLDivElement>(null);

  // Helper function to render themes with separator
  const renderThemes = (themes: string[] = []) => {
    return themes.map((theme, index) => (
      <span key={index}>
        {index > 0 && <span className="mx-2 text-gray-300">｜</span>}
        {theme}
      </span>
    ));
  };

  return (
    <BannerContainer
      className="relative min-h-[90vh] flex flex-col justify-center items-center text-white py-20 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto">

        <p className="text-xl md:text-3xl mb-8 text-b2b-lv1">{conference.title}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{conference.subtitle}</h1>
        
        {conference.themes && conference.themes.length > 0 && (
          <div className="mb-6 text-md md:text-lg flex flex-wrap justify-center">
            {renderThemes(conference.themes)}
          </div>
        )}
        
        {conference.organizers && conference.organizers.length > 0 && (
          <p className="mb-2 text-md">
            Organized by {conference.organizers.join('｜')}
          </p>
        )}
        
        {conference.supporters && (
          <p className="mb-6 text-md">
            Supported by {conference.supporters.join('｜')}
          </p>
        )}

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 max-w-2xl mx-auto">
          <div className="flex items-center text-md md:text-lg">
            <CalendarIcon className="h-6 w-6 mr-2" />
            <p className="font-semibold">{conference.date}</p>
          </div>
          <div className="flex items-center text-md md:text-lg">
            <MapPinIcon className="h-6 w-6 mr-2" />
            <p className="font-semibold">{conference.location}</p>
          </div>
        </div>

        <CustomButton
          component={Link}
          href={Routes.public.eventRegister}
          className="px-8 py-4 bg-white border border-solid border-white/20 shadow-btn rounded-[0.5rem] font-medium sm:text-lg text-base text-b2b-lv6 mb-16 md:mb-8"
        >
          Register Now
        </CustomButton>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-16">
        <Link href={`#${KEYNOTE_SPEAKERS_ID}`} scroll={true}>
          <ArrowDownCircle className="size-12 md:size-16" />
        </Link>
      </div>

      {/* This ref is for the scroll target */}
      <div ref={registerRef} className="absolute -bottom-1 left-0 right-0"></div>
    </BannerContainer>
  );
};
