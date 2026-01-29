"use client";

import MakeReservation from "@/components/makeReservation";
import RequestTrainingSection from "@/components/RequestTrainingSection";
import Reservations from "@/components/reservations";
import UltraSound from "@/components/UltraSound";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <h1>Fred Hutch Booking</h1>
      <RequestTrainingSection />
      <MakeReservation />
      <Reservations />
      <UltraSound />
    </main>
  );
}
