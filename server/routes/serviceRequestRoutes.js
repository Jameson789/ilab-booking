import express from 'express';
import { getAllValidServiceRequests } from '../controllers/serviceRequests.js';

const router = express.Router();

router.get('/', getAllValidServiceRequests);

export default router;