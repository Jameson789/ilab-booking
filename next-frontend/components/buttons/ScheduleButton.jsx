/*
  This component is a button that opens a new tab and loads the Microsoft Booking page for consultations.
*/
import Button from '@mui/material/Button'

const CONSULTATION_URL = "REPLACE WITH YOUR CONSULTATION URL" // Replace this to update the URL


function ScheduleButton() {
  const handleClick = () => {
    window.open(CONSULTATION_URL);
  };

  return (
    <>
      <Button 
        onClick={handleClick} 
        color="info" 
        variant="contained">
        Schedule Consultation
      </Button>
    </>
  );
}

export default ScheduleButton;