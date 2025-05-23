"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction";
import { EventContent } from "./event-content";
import { EventClickArg } from "@fullcalendar/core/index.js";

export const B2bCalendar: React.FC = () => {
  const handleDateClick = (arg: DateClickArg) => {
    const api = arg.view.calendar;
    api.addEvent({ start: arg.date, end: arg.date, allDay: true });
  };
  const handleEventClick = (arg: EventClickArg) => {
    const api = arg.view.calendar;
    formatDate(api.view.currentStart);
  };
  const formatDate = (date: Date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });
  return (
    <div className="bg-white [&_.fc-license-message]:hidden max-w-7xl mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        views={{
          dayGridMonth: { buttonText: "month", eventClick: handleEventClick },
          timeGridWeek: { buttonText: "week", eventClick: handleEventClick },
          timeGridDay: { buttonText: "day", eventClick: handleEventClick },
          listWeek: { buttonText: "list", eventClick: handleEventClick },
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        events={[
          { title: "event 1", start: "2025-05-16 14:41", end: "2025-05-16 15:41", editable: true },
          { title: "event 2", start: "2025-05-16 14:41", end: "2025-05-16 15:41", editable: true },
        ]}
        eventContent={EventContent}
        dateClick={handleDateClick}
      />
    </div>
  );
};

// events https://fullcalendar.io/docs/event-parsing
// get calendarApi from click event. For example: calendarApi = arg.view.calendar in handleDateClick()
