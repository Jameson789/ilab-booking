"use client";

import MakeReservation from "@/components/makeReservation";
import Reservations from "@/components/reservations";
import UltraSound from "@/components/UltraSound";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <h1>Fred Hutch Booking</h1>
      <MakeReservation />
      <Reservations />
      <UltraSound />
    </main>
  );
}
