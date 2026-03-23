/*
    This component renders the RequestTraining component when the "My Lab" option is chosen.

    Parents -> ReservePage
    Children -> RequestTrainingSection
*/

"use client"

import { useState } from "react";
import RequestTrainingSection from "./RequestTrainingSection";

function LabChoice() {
    // Set who is doing the scans
    const [usingEquiment, setUsingEquipment] = useState("Core"); // "myLab" or "pciCore"

    return (
        <>
            <div className="form-section">
                <h3>Using the equipment:</h3>
                <label>
                <input
                    type="radio"
                    name="usingEquiment"
                    value="core"
                    checked={usingEquiment === "Core"}
                    onChange={(e) => setUsingEquipment(e.target.value)}
                />
                Core
                </label>

                <label>
                <input
                    type="radio"
                    name="usingEquiment"
                    value="myLab"
                    checked={usingEquiment === "myLab"}
                    onChange={(e) => setUsingEquipment(e.target.value)}
                />
                My lab
                </label>

            </div>

            {/* If my lab is using the equipment, render Request Training section */}
            {usingEquiment === "myLab" && <RequestTrainingSection />}

        </>
    );
}

export default LabChoice;
