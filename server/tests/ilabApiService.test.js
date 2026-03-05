import { describe, test, expect, vi, beforeEach } from 'vitest';

// vi.hoisted() ensures this function runs BEFORE any imports are processed.
const mockGet = vi.hoisted(() => vi.fn());

vi.mock('axios', () => ({
    default: {
        create: vi.fn(() => ({ get: mockGet })),
    },
}));

import { fetchServiceRequests } from '../services/ilabApiService.js';

const mockServiceRequests = [
    { id: 1, name: 'TEST', state: 'processing' },
    { id: 2, name: 'TEST-2', state: 'cancelled' },
];

describe('ilabApiService', () => {
    beforeEach(() => {
        mockGet.mockResolvedValue({
            data: { ilab_response: { service_requests: mockServiceRequests } }
        });
    });

    test('fetchServiceRequests returns service request data', async () => {
        const data = await fetchServiceRequests();
        expect(data.ilab_response.service_requests).toHaveLength(2);
        expect(data.ilab_response.service_requests[0].name).toBe('TEST');
    });
});