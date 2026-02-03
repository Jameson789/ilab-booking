"use client"

import { useState } from "react";
import RequestTrainingSection from "./RequestTrainingSection";

function LabChoice() {
    // Set who is doing the scans
    const [doingScans, setDoingScans] = useState("pciCore"); // "myLab" or "pciCore"

    return (
        <>
            <div className="form-section">
                <h3>Doing the scans:</h3>
                <label>
                <input
                    type="radio"
                    name="doingScans"
                    value="pciCore"
                    checked={doingScans === "pciCore"}
                    onChange={(e) => setDoingScans(e.target.value)}
                />
                PCI Core
                </label>

                <label>
                <input
                    type="radio"
                    name="doingScans"
                    value="myLab"
                    checked={doingScans === "myLab"}
                    onChange={(e) => setDoingScans(e.target.value)}
                />
                My lab
                </label>

            </div>

            {/* If my lab is doing the training, render Request Training section */}
            {doingScans === "myLab" && <RequestTrainingSection />}

        </>
    );
}

export default LabChoice;
