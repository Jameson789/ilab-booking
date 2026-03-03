// Each reservation renders name and status

"use client";


function Reservation({ id, name, state, submitted_at }) {


  return (
    <>
      <div className="reservation-card">
        <strong>{name}</strong>
        <br />
        <em>{state}</em>
        <br />
        <em>{submitted_at?.slice(0, 10)}</em>
      </div>
    </>
  );
}

export default Reservation;