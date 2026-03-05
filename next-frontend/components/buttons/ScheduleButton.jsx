import Button from '@mui/material/Button'


function ScheduleButton() {
  const handleClick = () => {
    window.open("https://outlook.office.com/book/testPCIteamconsult@fredhutch.onmicrosoft.com/?ismsaljsauthenabled");
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