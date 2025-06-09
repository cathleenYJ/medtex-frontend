"use client";

import { Section } from "@ui/section";
import Link from "next/link";
import { Startup } from "@/types/medtex";
import { Card } from "@/components/ui/card";
import { StartupRepresentative, StartupTeam } from "@/types";

// Combined interface for both legacy Startup and new StartupTeam
interface StartupCardProps {
  startup: Startup | (StartupTeam & { representatives?: StartupRepresentative[] });
  theme?: "green" | "blue" | "red";
}

const StartupCard = ({ startup, theme = "green" }: StartupCardProps) => {
  // Handle both legacy and new formats - fix the TypeScript error by checking if representatives exists
  const mainRepresentative = 'representatives' in startup && 
    startup.representatives && 
    startup.representatives.length > 0 
      ? startup.representatives[0] 
      : null;
  
  const photo = 'photo' in startup ? startup.photo : mainRepresentative?.photo || startup.logo;
  const presenterName = 'presenter' in startup ? startup.presenter : mainRepresentative?.name || 'Lead Representative';
  const presenterTitle = 'presenter_title' in startup ? startup.presenter_title : mainRepresentative?.title || startup.name;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all h-full min-h-[400px] w-full relative" theme={theme}>
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={photo}
          alt={presenterName}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      </div>
      
      <div className="flex flex-col h-full w-full relative z-10">
        {/* Main content area */}
        <div className="flex-1 p-8 flex flex-col text-white">
          <div className="mt-auto pt-24">
            <h3 className="text-2xl font-bold text-white">{startup.name}</h3>
            <p className="text-base text-white mt-3">{startup.description}</p>
          </div>
        </div>
        
        {/* Footer area */}
        <div className="px-8 py-5 bg-[var(--attribute-block)] bg-opacity-80 text-white w-full">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="font-medium text-sm">{presenterName}</p>
              <p className="text-xs opacity-80">{presenterTitle}</p>
            </div>
            
            <Link 
              href={`/startups/${startup.id}`} 
              className="text-sm text-white hover:text-blue-100 font-medium flex items-center gap-1"
            >
              Learn more{" "}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface StartupsShowcaseProps {
  startups: Startup[] | (StartupTeam & { representatives?: StartupRepresentative[] })[];
  className?: string;
  theme?: "green" | "blue" | "red";
}

export const StartupsShowcase = ({ startups, className, theme = "green" }: StartupsShowcaseProps) => (
  <Section title="Global Startups" className={className}>
    <div data-card-theme={theme} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {startups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} theme={theme} />
        ))}
      </div>
    </div>
  </Section>
);
