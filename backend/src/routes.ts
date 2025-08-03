// src/routes.ts
import express from 'express';
import { login } from './controllers/auth';
import { getAiTools } from './controllers/aiTools';
import { authenticateToken } from './middleware/authMiddleware';

const router = express.Router();

router.post('/login', login);
router.get('/ai-tools', authenticateToken, getAiTools);

export default router;