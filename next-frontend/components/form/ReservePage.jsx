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
    const [apiError, setApiError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setApiError(null);

        const payload = {
            service_request: {
                owner_email: formData.ownerEmail,
                pi_email: formData.piEmail,
                name: formData.studyName,
                state: formData.state,
            }
        };
        
        try {
            const res = await fetch('/api/service-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errData = await res.json();
                setApiError(errData.error || 'Something went wrong.');
                return;
            }

            router.push('/');
        } catch (err) {
            setApiError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleBack = () => router.push("/");

    return (
        <>
            <button onClick={handleBack}>Back</button>
            {apiError && <div className="error-banner">{apiError}</div>}
            <form onSubmit={handleSubmit}>
                <ReserveForm 
                    machineName={machineName}
                    formData={formData}
                    errors={errors}
                />
                <LabChoice />
                <button type="submit" disabled={isSubmitting}>
                    { isSubmitting ? "Submitting..." : "Reserve" }
                </button>
            </form>
        </>
    );
}

export default Reserve;