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
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>{reservation.name} - <em>{reservation.state}</em></li>
                ))}
            </ul>
        </>
    )
}

export default Reservations;