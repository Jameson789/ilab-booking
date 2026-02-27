import { fetchServiceRequests, postServiceRequests } from "../services/ilabApiService.js";

export const getAllValidServiceRequests = async (req, res) => {
    try {
        const data = await fetchServiceRequests();
        const serviceRequests = data.ilab_response.service_requests;
        res.status(200).json(serviceRequests);
    } catch (error) {
        console.error('Error fetching service requests: ', error.message);
        res.status(500).json({ error: 'Failed to fetch service requests' });
    } 
};

export const createServiceRequest = async (req, res) => {
    const { owner_email, pi_email, name, state } = req.body.service_request;
    
    if (!owner_email) {
        return res.status(400).json({error: 'Missing owner email'})
    }
        if (!pi_email) {
        return res.status(400).json({error: 'Missing pi email'})
    }
    if (!name) {
        return res.status(400).json({error: 'Missing study name'})
    }
    if (!state) {
        return res.status(400).json({error: 'Missing state'})
    }

    try {
        const payload = {}
        const data = {}
        res.status(201).json(data);
    } catch (err) {
        console.error('ERROR: ', err.message);
        res.status(500).json({ error: '' })
    }
}