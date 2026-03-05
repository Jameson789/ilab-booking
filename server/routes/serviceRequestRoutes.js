import express from 'express';
import { getAllValidServiceRequests, createServiceRequests } from '../controllers/serviceRequests.js';

const router = express.Router();

router.get('/', getAllValidServiceRequests);
router.post('/', createServiceRequests);

export default router;