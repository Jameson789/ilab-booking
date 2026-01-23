import React, { useState } from 'react';
import UltraSound from "./UltraSound";
function MakeReservation() {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(true);
    }
    return(
        <>
            <p>Make a reservation</p>
            <button onClick={handleClick}>Ultrasound</button>
            {isVisible && <UltraSound />}
        </>
    )
}

export default MakeReservation;