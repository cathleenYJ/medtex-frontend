import { serverFetch } from "@/data/server";
import { SectionContainer } from "@ui/section-container";
import { AgendaSection } from "@/components/home/agenda-section";
import { PackagesSection } from "@/components/registration/packages-section";
import { RegistrationNotesSection } from "@/components/registration/registration-notes-section";
import { EventDetailsHeader } from "@/components/registration/event-details-header";

export default async function EventRegistrationPage() {
  // Fetch registration data
  const registrationData = await serverFetch.registration.data();
  const schedule = await serverFetch.schedule.data();
  const conference = await serverFetch.conference.data();

  return (
    <div data-home className="pb-40">
      <EventDetailsHeader conference={conference} />
      <SectionContainer>
        <AgendaSection schedule={schedule} />
        <PackagesSection className="pt-[7.5rem]" packages={registrationData.packages} />
        <RegistrationNotesSection className="pt-[7.5rem]" notes={registrationData.notes} />
      </SectionContainer>
    </div>
  );
}
