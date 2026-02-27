"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import ReserveForm from "./ReserveForm";
import LabChoice from "./LabChoice";

function Reserve({ machineName }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        ownerEmail: '',
        piEmail: '',
        studyName: '',
        state: 'proposed', // default
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            service_request: {
                owner_email: formData.ownerEmail,
                pi_email: formData.piEmail,
                name: formData.studyName,
                state: formData.state,
            }
        };
        
        // TODO: Add API POST here

        setIsSubmitting(false);
    };

    const handleBack = () => router.push("/");

    return (
        <>
            <button onClick={handleBack}>Back</button>
            <form onSubmit={handleSubmit}>
                <ReserveForm machineName={machineName}/>
                <LabChoice />
                <button type="submit">Reserve</button>
            </form>
        </>
    );
}

export default Reserve;