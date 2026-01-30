"use client"

import { useRouter } from "next/navigation";
import ReserveForm from "./ReserveForm";
import LabChoice from "./LabChoice";

function Reserve() {
    const router = useRouter();


    const handleClick = () => {
        router.push("/");
    };
    return (
        <>
            <button onClick={handleClick}>Back</button>
            <ReserveForm />
            <LabChoice />


            <button>Reserve</button>
        </>
    );
}

export default Reserve;
