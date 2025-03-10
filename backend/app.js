import express from 'express';
import testRoutes from './routes/testRoutes.js';

const app = express();
app.use('/test', testRoutes);

export default app;
