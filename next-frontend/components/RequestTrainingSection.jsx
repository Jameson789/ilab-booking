function RequestTrainingSection() {
    return (
        <div className="form-section">
            <h3>Training</h3>
            <p>Training is required for this modality if you have not been trained in the last <b>six months.</b></p>
            <input
                type="checkbox"
                id="requestTraining"
                name="requestTraining"
                value="request"
            />
            <label htmlFor="requestTraining">
                Request training
            </label>
        </div>
    );
}

export default RequestTrainingSection;