"use client";

import { B2bCalendar } from "@dashboard/calendar";
import { UserAdmin } from "@dashboard/user-admin";

export default function AdminHome() {
  return (
    <div className="home">
      <UserAdmin />
      <B2bCalendar />
    </div>
  );
}
