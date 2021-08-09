import express from 'express';

import { registerValidator, loginValidator, validatorResult } from '../middleware/validator.js';
import { registerController, loginController } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', registerValidator, validatorResult, registerController);
router.post('/login', loginValidator, validatorResult, loginController);

export default router;
