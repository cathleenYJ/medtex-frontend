import { EventContentArg } from "@fullcalendar/core/index.js";

export const EventContent: React.FC<EventContentArg> = (eventInfo) => {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
};
