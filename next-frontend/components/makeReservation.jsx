"use client";

import { useRouter } from "next/navigation";

function MakeReservation() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/reserve");
  };

  return (
    <>
      <p>Make a reservation</p>

      <button onClick={handleClick}>
        Ultrasound
      </button>
    </>
  );
}

export default MakeReservation;
