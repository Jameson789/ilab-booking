/*
  This component render the header and all active equipment card components.
*/

"use client";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ReservationButton from "./EquipmentCard";

function AvailableServices() {

  return (
    <>
      <Typography 
        variant="h4" 
        component="h2"
        color="secondary" 
        gutterBottom>
        Available Services
      </Typography>
      <Grid sx={{marginBottom: "17px"}}container spacing = {2}>
        <Grid size={4}>
          <ReservationButton machineName="MRI" />
        </Grid>
        <Grid size={4}>
          <ReservationButton machineName="Ultrasound" />
        </Grid>
        <Grid size={4}>
          <ReservationButton machineName="Other"/>
        </Grid>
      </Grid>
      
      
    </>
  );
}

export default AvailableServices;
