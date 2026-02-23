import { describe, test, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { fetchServiceRequests } from '../services/ilabApiService';

vi.mock('axios');

const mockServiceRequests = [
    {},
    {},
]