import { fetchServiceRequests } from "../services/ilabApiService.js";

export const getAllValidServiceRequests = async (req, res) => {
    try {
        const data = await fetchServiceRequests();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching service requests: ', error.message);
        res.status(500).json({ error: 'Failed to fetch service requests' });
    } 
};