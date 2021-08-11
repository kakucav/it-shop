import express from 'express';

import { createCategoryController } from '../controllers/category.js';
import authenticateJWT from '../middleware/authenticator.js';

const router = express.Router();

router.post('/', authenticateJWT, createCategoryController);

export default router;
