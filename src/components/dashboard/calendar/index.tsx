"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import scrollgridPlugin from "@fullcalendar/scrollgrid";
import interactionPlugin, { type DateClickArg } from "@fullcalendar/interaction";
import { EventContent } from "./event-content";

export const B2bCalendar: React.FC = () => {
  const handleDateClick = (arg: DateClickArg) => {
    console.log(arg);
  };
  return (
    <div className="bg-white">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, scrollgridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        views={{
          dayGridMonth: { buttonText: "month" },
          timeGridWeek: { buttonText: "week" },
          timeGridDay: { buttonText: "day" },
          listWeek: { buttonText: "list" },
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        events={[
          { title: "event 1", date: "2025-05-01", editable: true },
          { title: "event 2", date: "2025-05-02", editable: true },
        ]}
        eventContent={EventContent}
        dateClick={handleDateClick}
      />
    </div>
  );
};

// events https://fullcalendar.io/docs/event-parsing
// get calendarApi from click event. For example: calendarApi = arg.view.calendar in handleDateClick()
