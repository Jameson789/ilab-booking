import { describe, test, expect, vi } from 'vitest';
import request from 'supertest';

vi.mock('../services/ilabApiService.js');

import app from '../app.js';
import * as ilabApiService from '../services/ilabApiService.js';

const mockServiceRequests = [
    { id: 1, name: 'TEST', state: 'processing' },
    { id: 2, name: 'TEST-2', state: 'cancelled' },
];

describe('GET /api/service-requests', () => {
    // This is an integration test — it exercises the full stack:
    // route → controller → service (mocked). If any layer is wired
    // up incorrectly, this test will catch it.
    test('returns 200 with service requests', async () => {
        ilabApiService.fetchServiceRequests.mockResolvedValue({
            ilab_response: { service_requests: mockServiceRequests }
        });

        const res = await request(app).get('/api/service-requests');

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(2);
        expect(res.body[0].name).toBe('TEST');
    });

    test('returns 500 when the service fails', async () => {
        ilabApiService.fetchServiceRequests.mockRejectedValue(new Error('API down'));

        const res = await request(app).get('/api/service-requests');

        expect(res.statusCode).toBe(500);
        expect(res.body).toEqual({ error: 'Failed to fetch service requests' });
    });
});