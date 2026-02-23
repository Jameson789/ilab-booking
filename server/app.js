import express from 'express';
import serviceRequestRoutes from './routes/serviceRequestRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/service-requests', serviceRequestRoutes);

export default app;