"use client";

import { useState, useEffect } from "react";
import Reservation from "./Reservation";

function Reservations() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('/api/service-requests')
            .then(res => res.json())
            .then(data => setReservations(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) return <p>Error loading reservations: {error}</p>;

    return (
        <>
            <h2>Review Reservations</h2>
            {reservations.map((reservation) => (
                        <Reservation key={reservation.id} id={reservation.id} name={reservation.name} state={reservation.state} submitted_at={reservation.submitted_at}/>
            ))}
        </>
    )
}

export default Reservations;