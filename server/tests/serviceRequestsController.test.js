import { describe, test, expect, vi, beforeEach } from 'vitest';

// Mock the service layer so the controller is tested in isolation —
// we don't want a real API call happening in a controller test.
vi.mock('../services/ilabApiService.js');

import { getAllValidServiceRequests } from '../controllers/serviceRequests.js';
import * as ilabApiService from '../services/ilabApiService.js';

const mockServiceRequests = [
    { id: 1, name: 'TEST', state: 'processing' },
    { id: 2, name: 'TEST-2', state: 'cancelled' },
];

describe('getAllValidServiceRequests controller', () => {
    let req, res;

    // Simulate Express's req and res objects.
    // res.status().json() is a chain, so status() needs to return res itself.
    beforeEach(() => {
        req = {};
        res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn(),
        };
    });

    test('responds with 200 and service requests on success', async () => {
        ilabApiService.fetchServiceRequests.mockResolvedValue({
            ilab_response: { service_requests: mockServiceRequests }
        });

        await getAllValidServiceRequests(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockServiceRequests);
    });

    test('responds with 500 when the service throws', async () => {
        ilabApiService.fetchServiceRequests.mockRejectedValue(new Error('API down'));

        await getAllValidServiceRequests(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch service requests' });
    });
});