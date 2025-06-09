"use client";

import { Section } from "@ui/section";
import { Card } from "@/components/ui/card";

interface Event {
  year: number;
  image: string;
  link: string;
}

interface EventCardProps {
  event: Event;
  theme?: "green" | "blue" | "red";
}

const EventCard = ({ event, theme = "green" }: EventCardProps) => (
  <Card className="overflow-hidden hover:shadow-xl transition-all h-full w-full" theme={theme}>
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col p-6 text-white bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] w-full">
        <div className="w-full mb-4">
          <img
            src={event.image}
            alt={`${event.year} event`}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>

        <div className="w-full">
          <h3 className="text-xl font-bold text-white">{event.year}</h3>
            <p className="text-sm text-white">MEDTEX Summit Asia</p>
        </div>
      </div>

      <div className="mt-auto px-6 py-4 bg-[var(--attribute-block)] text-white w-full">
        <div className="flex justify-between items-center w-full">
            <span className="text-sm opacity-80">Event Review</span>
          <a
            href={event.link}
            className="text-sm text-white hover:text-blue-100 font-medium flex items-center gap-1"
          >
            Learn more{" "}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </Card>
);

interface PastEventsGalleryProps {
  events: Event[];
  className?: string;
  theme?: "green" | "blue" | "red";
}

export const PastEventsGallery = ({ events, className, theme = "green" }: PastEventsGalleryProps) => (
  <Section
    title="Past Events"
    className={className}
  >
    <div data-card-theme={theme} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {events.map((event) => (
          <EventCard key={event.year} event={event} theme={theme} />
        ))}
      </div>
    </div>
  </Section>
);
