/*
  This page renders the top banner (title and schedule consultation button) itself, while rendering the main-page components.

  It is the parent to all components in /components/main-page.

  Children -> ScheduleButton, AvailableServices, MyRequests
*/

"use client";

import MakeReservationSection from "@/components/main-page/MakeReservationSection";
import ReservationsSection from "@/components/main-page/ReservationsSection";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <h1>Fred Hutch Booking</h1>
      <MakeReservationSection />
      <ReservationsSection />
    </main>
  );
}
