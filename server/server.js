import express from 'express';
import serviceRequestRoutes from './routes/serviceRequestRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/service-requests', serviceRequestRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});