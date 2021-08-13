import express from 'express';

import * as categoryController from '../controllers/category.js';
import authenticateJWT from '../middleware/authenticator.js';

const router = express.Router();

router.post('/', authenticateJWT, categoryController.create);
router.get('/', categoryController.readAll);

export default router;
