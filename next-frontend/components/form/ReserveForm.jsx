'use client'
import { useState } from 'react'
import '../../app/globals.css'
function ReserveForm({ machineName }) {
    const [formData, setFormData] = useState({
        piName: '',
        studyName: '',
        studyFocus: '',
        billingCode: ''
    });

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
                    <label>PI Name</label>
                    <br/>
                    <input 
                        name="piName"
                        value={formData.piName}
                        onChange={handleChange}
                    />
                    <br/>

                    <label>Study Name</label>
                    <br/>
                    <input 
                        name="studyName"
                        value={formData.studyName}
                        onChange={handleChange}
                    />
                    <br/>

                    <label>Study Focus</label>
                    <br/>
                    <textarea 
                        name="studyFocus"
                        value={formData.studyFocus}
                        onChange={handleChange}
                    />
                    <br/>

                    <label>Billing Code</label>
                    <br/>
                    <input 
                        name="billingCode"
                        value={formData.billingCode}
                        onChange={handleChange}
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