"use client"

import { useRouter } from "next/navigation";
import ReserveForm from "./ReserveForm";
import LabChoice from "./LabChoice";

function Reserve({ machineName }) {
    const router = useRouter();


    const handleClick = () => {
        router.push("/");
    };
    return (
        <>
            <button onClick={handleClick}>Back</button>
            <ReserveForm machineName={machineName}/>
            <LabChoice />


            <button>Reserve</button>
        </>
    );
}

export default Reserve;
