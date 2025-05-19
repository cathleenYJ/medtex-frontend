"use client";

import { B2bCalendar } from "@dashboard/calendar";
import { UserAdmin } from "@dashboard/user-admin";

export default function AdminHome() {
  return (
    <div className="home px-5">
      <UserAdmin />
      <B2bCalendar />
    </div>
  );
}
