import express from 'express';
import { getAllValidServiceRequests, createServiceRequest } from '../controllers/serviceRequests.js';

const router = express.Router();

router.get('/', getAllValidServiceRequests);
router.post('/', createServiceRequest);

export default router;