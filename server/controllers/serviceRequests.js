import { fetchServiceRequests } from "../services/ilabApiService.js";

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