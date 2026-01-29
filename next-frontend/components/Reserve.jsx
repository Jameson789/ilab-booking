"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import RequestTrainingSection from "./RequestTrainingSection";

function Reserve() {
    const router = useRouter();

    // Set who is doing the scans
    const [doingScans, setDoingScans] = useState("pciCore"); // "myLab" or "pciCore"

    const handleClick = () => {
        router.push("/");
    };
    return (
        <>
            <button onClick={handleClick}>Back</button>
            
            <div className="form-section">
                <b>Doing the scans:</b>
                <br/>
                <br/>

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


            <button>Reserve</button>
        </>
    );
}

export default Reserve;
