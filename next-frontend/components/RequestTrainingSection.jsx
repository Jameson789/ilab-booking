function RequestTrainingSection() {
    return (
        <div class="form-section">
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