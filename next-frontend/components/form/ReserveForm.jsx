'use client'
import '../../app/globals.css'
function ReserveForm() {
    return (
        <>
            <h2>*Study* Form </h2>
                <div className="form-section">
                    <form>
                        <label>PI Name</label>
                        <br/>
                        <input></input>
                        <br/>

                        <label>Study Name</label>
                        <br/>
                        <input></input>
                        <br/>

                        <label>Study Focus</label>
                        <br/>
                        <textarea></textarea>
                        <br/>

                        <label>Billing Code</label>
                        <br/>
                        <input></input>
                    </form>
                </div>
        </>
    )
}

export default ReserveForm;