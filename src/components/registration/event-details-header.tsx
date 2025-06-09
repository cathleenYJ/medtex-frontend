import React from "react";
import { Conference } from "@/types";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { BannerContainer } from "@ui/banner-container";

interface EventDetailsHeaderProps {
  conference: Conference;
}

export const EventDetailsHeader: React.FC<EventDetailsHeaderProps> = ({ conference }) => {
  return (
    <BannerContainer
        className="relative min-h-[50vh] flex flex-col justify-center items-center text-white py-20 px-6 text-center"
      >
      <div className="max-w-4xl mx-auto">
        <p className="text-xl md:text-3xl mb-8 text-b2b-lv1">{conference.title}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-12">Innovate Summit Agenda</h1>
        
        <p className="mb-2 text-md">
          Explore the full schedule of sessions and speakers at the Innovate Summit.
        </p>
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
      </div>
    </BannerContainer>
  );
};
