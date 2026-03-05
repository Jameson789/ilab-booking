'use client'

import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function ReservationPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const sp = useSearchParams();
  const name = sp.get("name");
  const state = sp.get("state");
  const submitted_at = sp.get("submitted_at");

  const handleBack = () => router.push("/");

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h2>Reservation Details</h2>
      <p>{id}</p>
      <p>{name}</p>
      <p>{state}</p>
      <p>{submitted_at}</p>
    </div>
  );
}

export default ReservationPage;