"user client";

import { useState, useEffect } from "react";

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
                <p key={reservation.id}>{reservation.name} - {reservation.state}</p>
            ))}
        </>
    )
}

export default Reservations;