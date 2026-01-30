"use client";

import ReservationButton from "./ReservationButton";

function MakeReservationSection() {

  return (
    <>
      <h2>Make a Reservation</h2>
      <ReservationButton machineName="MRI" />
      <ReservationButton machineName="Ultrasound" />
      <ReservationButton machineName="Other"/>
      
    </>
  );
}

export default MakeReservationSection;
