/*
  This component renders an Equipment Card that is clickable and takes you to the form to schedule equipment.

  Children-> Reservation
*/

"use client";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import Reservation from "./Reservation";

function MyRequests() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    fetch('/api/service-requests')
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch reservations');
            }
            return res.json();
        })
        .then(data => {
            if (Array.isArray(data)) {
                setReservations(data);
            } else {
                throw new Error('Data received is not an array');
            }
        })
        .catch(err => {
            console.error(err);
            setError(err.message);
        });
}, []);

    if (error) return <p>Error loading reservations: {error}</p>;

    return (
        <>
            <Typography 
                variant="h4" 
                component="h2"
                color="secondary" 
                gutterBottom>
                My Requests
            </Typography>
            <div className="reservations-grid">
                <Grid container spacing={2}>
                    {reservations.map((reservation) => (
                        <Grid size={4}>
                            <Reservation
                                key={reservation.id}
                                id={reservation.id}
                                name={reservation.name}
                                state={reservation.state}
                                submitted_at={reservation.submitted_at}
                            />
                        </Grid>
                    ))}

                </Grid>
                
            </div>
        </>
    )
}

export default MyRequests;