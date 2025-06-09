import { serverFetch } from "@/data/server";
import { SectionContainer } from "@ui/section-container";
import { HeroBanner } from "@/components/home/hero-banner";
import { KeynoteSpeakers } from "@/components/home/keynote-speakers";
import { StartupsShowcase } from "@/components/home/startups-showcase";
import { AgendaSection } from "@/components/home/agenda-section";
import { PastEventsGallery } from "@/components/home/past-events-gallery";
import { KeynoteSpeakersString } from "@/utils/elements-id";

export default async function EventPage() {
  // Fetch data for the event page
  const conference = await serverFetch.conference.data();
  const speakers = await serverFetch.speakers.data();
  const startupTeams = await serverFetch.startups.teams.getAll();
  const startupRepresentatives = await Promise.all(
    startupTeams.map(async (team) => {
      const representatives = await serverFetch.startups.representatives.getByTeamId(team.id);
      return { teamId: team.id, representatives };
    })
  );

  // Combine teams with their representatives
  const startupData = startupTeams.map(team => {
    const teamReps = startupRepresentatives.find(r => r.teamId === team.id)?.representatives || [];
    return { 
      ...team, 
      representatives: teamReps
    };
  });

  const schedule = await serverFetch.schedule.data();
  const pastEvents = await serverFetch.pastEvents.data();

  return (
    <div data-home className="pb-40">
      <HeroBanner conference={conference} />
      <SectionContainer>
        <KeynoteSpeakers speakers={speakers} title={KeynoteSpeakersString} />
        <StartupsShowcase className="pt-[7.5rem]" startups={startupData} />
        <AgendaSection className="pt-[7.5rem]" schedule={schedule}/>
        <PastEventsGallery className="pt-[7.5rem]" events={pastEvents} />
      </SectionContainer>
    </div>
  );
}
