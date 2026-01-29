"use client";

import { useRouter } from "next/navigation";

function MakeReservation() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/reserve");
  };

  return (
    <>
      <h2>Make reservation</h2>

      <button onClick={handleClick}>
        Ultrasound
      </button>
    </>
  );
}

export default MakeReservation;
