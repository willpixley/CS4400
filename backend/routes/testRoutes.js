import express from 'express';
import { testController } from '../controllers/testControllers.js';

const router = express.Router();

// Matches route GET /test/
router.get('/', testController);
export default router;
