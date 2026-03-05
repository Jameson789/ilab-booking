/*
  This component renders the header and all active equipment card components.

  Children -> EquipmentCard
*/

"use client";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import EquipmentCard from "./EquipmentCard";

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
        <Grid size={3}>
          <EquipmentCard machineName="MRI" />
        </Grid>
        <Grid size={3}>
          <EquipmentCard machineName="Ultrasound" />
        </Grid>
        <Grid size={3}>
          <EquipmentCard machineName="Other"/>
        </Grid>
      </Grid>
      
      
    </>
  );
}

export default AvailableServices;
