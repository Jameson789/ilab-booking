import axios from 'axios';
import { ilabConfig } from '../config/ilabConfig.js';

const ilabClient = axios.create({
    baseURL: ilabConfig.baseURL,
    headers: {
        Authorization: `Bearer ${ilabConfig.token}`,
        'Content-Type': 'application/json',
    },
})

export const fetchServiceRequests = async () => {
    const res = await ilabClient.get('/v1/cores/4665/service_requests');
    return res.data;
}

export const postServiceRequests = async (payload) => {
    const res = await ilabClient.post('/v1/cores/4665/service_requests', payload);
    return res.data;
}