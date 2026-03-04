function ScheduleButton() {
  const handleClick = () => {
    window.open("https://outlook.office.com/book/testPCIteamconsult@fredhutch.onmicrosoft.com/?ismsaljsauthenabled");
  };

  return (
    <button onClick={handleClick}>
      Schedule Consultation
    </button>
  );
}

export default ScheduleButton;