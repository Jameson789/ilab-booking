"use client";

import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import Reservation from "./Reservation";

function MyRequests() {
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
            <Typography 
                variant="h4" 
                component="h2"
                color="secondary" 
                gutterBottom>
                Available Services
            </Typography>
            <div className="reservations-grid">
                {reservations.map((reservation) => (
                    <Reservation
                        key={reservation.id}
                        id={reservation.id}
                        name={reservation.name}
                        state={reservation.state}
                        submitted_at={reservation.submitted_at}
                    />
                ))}
            </div>
        </>
    )
}

export default MyRequests;