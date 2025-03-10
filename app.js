import express from 'express';

const app = express();
app.use('/test', (req, res) => res.status(200));

export default app;
