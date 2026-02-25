// Each reservation renders name and status

"use client";


function Reservation({ id, name, state, submitted_at }) {


  return (
    <>
      <div style={{ border: "1px solid #ccc", backgroundColor: "beige", padding: "8px", margin: "8px", borderRadius: "4px", width: "15%" }}>
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