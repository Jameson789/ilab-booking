'use client'
import { useState } from 'react'
import '../../app/globals.css'
function ReserveForm({ machineName, formData, errors, onChange }) {

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
                    onChange={onChange}
                    />
                    {errors?.ownerEmail && <span style={{ color: 'red' }}>{errors.ownerEmail}</span>}
                    <br />

                    <label htmlFor="piEmail">PI Email</label>
                    <br />
                    <input
                        id="piEmail"
                        name="piEmail"
                        type="email"
                        value={formData.piEmail}
                        onChange={onChange}
                    />
                    {errors?.piEmail && <span style={{ color: 'red' }}>{errors.piEmail}</span>}
                    <br />

                    <label htmlFor="studyName">Study Name</label>
                    <br />
                    <input
                        id="studyName"
                        name="studyName"
                        value={formData.studyName}
                        onChange={onChange}
                    />
                    <br />

                    <label>Study Focus</label>
                    <br/>
                    <textarea name="studyFocus" />
                    <br/>

                    <label>Billing Code</label>
                    <br/>
                    <input name="billingCode" />
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