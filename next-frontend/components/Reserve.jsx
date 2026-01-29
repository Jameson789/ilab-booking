"use client"

import { useRouter } from "next/navigation";
import RequestTrainingSection from "./RequestTrainingSection";

function Reserve() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");
    };
    return (
        <>
            <button onClick={handleClick}>Home Page</button>
            <RequestTrainingSection></RequestTrainingSection>
            <p>Reserve</p>
        </>
    );
}

export default Reserve;
