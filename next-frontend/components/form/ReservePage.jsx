"use client"

import { useRouter } from "next/navigation";
import ReserveForm from "./ReserveForm";
import LabChoice from "./LabChoice";

function Reserve({ machineName }) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Machine reserved successfully");
        router.push("/");
    };

    return (
        <>
            <button onClick={handleClick}>Back</button>
            <form onSubmit={handleSubmit}>
                <ReserveForm machineName={machineName}/>
                <LabChoice />
                <button type="submit">Reserve</button>
            </form>
        </>
    );
}

export default Reserve;