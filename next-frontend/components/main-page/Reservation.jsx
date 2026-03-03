// Each reservation renders name and status
"use client";
import Link from "next/link";

function Reservation({ id, name, state, submitted_at }) {


  return (
    <>
      <Link href={`/reservations/${id}`} className="reservation-card" style={{ display: "block" }}>
        <strong>{name}</strong>
        <br />
        <em>{state}</em>
        <br />
        <em>{submitted_at?.slice(0, 10)}</em>
      </Link>
    </>
  );
}

export default Reservation;