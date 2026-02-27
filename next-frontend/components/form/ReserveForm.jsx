'use client'
import { useState } from 'react'
import '../../app/globals.css'
function ReserveForm({ machineName, formData, errors }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <h2>{machineName} Form </h2>
            <div className="form-section">
                <form>
                    <label>Your Email</label>
                    <br />
                    <input
                    id="ownerEmail"
                    name="ownerEmail"
                    type="email"
                    value={formData.ownerEmail}
                    onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="piEmail">PI Email</label>
                    <br />
                    <input
                        id="piEmail"
                        name="piEmail"
                        type="email"
                        value={formData.piEmail}
                        onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="studyName">Study Name</label>
                    <br />
                    <input
                        id="studyName"
                        name="studyName"
                        value={formData.studyName}
                        onChange={handleChange}
                    />
                    <br />

                    <label>Study Focus</label>
                    <br/>
                    <textarea 
                        name="studyFocus"
                    />
                    <br/>

                    <label>Billing Code</label>
                    <br/>
                    <input 
                        name="billingCode"
                    />
                    <br/>

                    <label>Upload patient data</label>
                    <br/>
                    <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" id="file" name="file" multiple/>
                </form>
            </div>
        </>
    )
}

export default ReserveForm;