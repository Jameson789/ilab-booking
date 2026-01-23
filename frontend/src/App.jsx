import MakeReservation from "./components/MakeReservation";
import Reservations from "./components/Reservations";
import Reserve from "./components/Reserve";
function App() {
  return (
    <>
      <h1>Fred Hutch Booking</h1>
      <MakeReservation></MakeReservation>
      <Reservations></Reservations>
      <Reserve></Reserve>
    </>  
  )
}
export default App;
