/*
  This page renders the top banner (title and schedule consultation button) itself, while rendering the main-page components.

  It is the parent to all components in /components/main-page.

  Children -> ScheduleButton, AvailableServices, ReservationSection
*/

"use client";

import AvailableServices from "@/components/main-page/AvailableServices";
import MyRequests from "@/components/main-page/MyRequests";
import ScheduleButton from "@/components/buttons/ScheduleButton";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import "./globals.css";

export default function HomePage() {
  return (
    <Box sx={{margin: '2%'}}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%'}}>
        <Typography 
          variant="h2" 
          component="h1"
          color="primary" 
          gutterBottom>
          PCI Portal
        </Typography>
        <ScheduleButton></ScheduleButton>
      </Box>
      <Box>
        <AvailableServices />
      </Box>
      <hr />
      <Box>
        <MyRequests />
      </Box>
      
    </Box>
  );
}
