"use client";

import { ScheduleDay, ScheduleEvent } from "../../types/medtex";
import { Section } from "@ui/section";

interface AgendaItemProps {
  event: ScheduleEvent;
}

const AgendaItem = ({ event }: AgendaItemProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-green-100/30 text-white";
      case "fireside_chat":
      case "pitch_session":
        return "bg-emerald-100/30 text-white";
      case "ceremony":
        return "bg-teal-100/30 text-white";
      case "break":
      case "networking":
        return "bg-gray-100/30 text-white";
      default:
        return "bg-gray-100/30 text-white";
    }
  };

  // Format event type for display
  const formatEventType = (type: string) => {
    switch (type) {
      case "keynote":
        return "Keynote";
      case "fireside_chat":
        return "Fireside Chat";
      case "pitch_session":
        return "Pitch Session";
      case "ceremony":
        return "Ceremony";
      case "break":
        return "Break";
      case "networking":
        return "Networking";
      default:
        return type;
    }
  };

  return (
    <div className="border-l-4 border-[var(--b2b-lv1)] pl-4 mb-8 w-full">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <p className="text-base font-semibold text-white">{event.time}</p>
        <span
          className={`text-xs px-2 py-1 rounded-full ${getTypeColor(
            event.type
          )}`}
        >
          {formatEventType(event.type)}
        </span>
      </div>

      <h4 className="text-lg font-semibold mb-2 text-white">{event.title}</h4>

      {event.speaker && (
        <p className="text-sm text-white/90 mb-1">
            <span className="font-medium">Speaker: </span>
          {event.speaker}
        </p>
      )}

      {event.host && (
        <p className="text-sm text-white/90 mb-1">
            <span className="font-medium">Host: </span>
          {event.host}
        </p>
      )}

      {event.moderator && (
        <p className="text-sm text-white/90 mb-1">
            <span className="font-medium">Moderator: </span>
          {event.moderator}
        </p>
      )}

      {event.panelists && event.panelists.length > 0 && (
        <div className="text-sm text-white/90 mb-1">
            <p className="font-medium mb-1">Panelists:</p>
          <ul className="list-disc pl-5">
            {event.panelists.map((panelist, index) => (
              <li key={index}>{panelist}</li>
            ))}
          </ul>
        </div>
      )}

      {event.presenters && event.presenters.length > 0 && (
        <div className="text-sm text-white/90 mb-1">
            <p className="font-medium mb-1">Presenters:</p>
          <ul className="list-disc pl-5">
            {event.presenters.map((presenter, index) => (
              <li key={index}>{presenter}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface AgendaSectionProps {
  schedule: ScheduleDay[];
  className?: string;
  theme?: "green" | "blue" | "red";
}

export const AgendaSection = ({ schedule, className, theme = "green" }: AgendaSectionProps) => {
  // With a single day, we just use the first day directly
  const day = schedule[0];
  
  return (
    <Section
      title="Agenda"
      className={className}
    >
      <div data-card-theme={theme} className="w-full">
        <div className={`rounded-xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] p-6 shadow-md`}> 
          {day?.events.map((event, idx) => (
            <AgendaItem key={idx} event={event} />
          ))}
        </div>
      </div>
    </Section>
  );
};
