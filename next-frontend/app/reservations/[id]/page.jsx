'use client'

import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

function ReservationPage() {
  const params = useParams();
  const id = params.id;

  const sp = useSearchParams();
  const name = sp.get("name");
  const state = sp.get("state");
  const submitted_at = sp.get("submitted_at");
  return (
    <div>
      <h2>Reservation Details</h2>
      <p>{id}</p>
      <p>{name}</p>
      <p>{state}</p>
      <p>{submitted_at}</p>
    </div>
  );
}

export default ReservationPage;