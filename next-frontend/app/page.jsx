/*
  This page renders the top banner (title and schedule consultation button) itself, while rendering the main-page components.

  It is the parent to all components in /components/main-page.

  Children -> ScheduleButton, AvailableServices, MyRequests
*/

"use client";

import AvailableServices from "@/components/main-page/AvailableServices";
import MyRequests from "@/components/main-page/MyRequests";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <h1>Fred Hutch Booking</h1>
      <AvailableServices />
      <MyRequests />
    </main>
  );
}
