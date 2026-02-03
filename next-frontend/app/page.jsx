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
