"use client";

import { useRouter } from "next/navigation";

function ReservationButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/reserve");
  };

  return (
    <>
      <button onClick={handleClick}>
        RESERVE
      </button>
    </>
  );
}

export default ReservationButton;