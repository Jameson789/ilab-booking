/*
  This component renders a Request Card that is clickable and takes you to the detailed view of that request.

  Parents
*/

// Each reservation renders name and status
"use client";
import Link from "next/link";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";



function Reservation({ id, name, state, submitted_at }) {


  return (
    <>
      <Card>
        <CardActionArea
          component={Link}
          href={{
            pathname: `/reservations/${id}`,
            query: { name, state, submitted_at }
          }}
        >
          <CardContent>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="info">
              {state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {submitted_at?.slice(0, 10)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Reservation;