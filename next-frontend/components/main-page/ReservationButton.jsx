"use client";

import { useRouter } from "next/navigation";

function ReservationButton({ machineName }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/reserve?machine=${encodeURIComponent(machineName)}`);
  };

  return (
    <>
      <button onClick={handleClick}>
        {machineName}
      </button>
    </>
  );
}

export default ReservationButton;