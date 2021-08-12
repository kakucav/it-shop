import express from 'express';

import { registerValidator, loginValidator, validatorResult } from '../middleware/validator.js';
import * as authController from '../controllers/auth.js';

const router = express.Router();

router.post('/register', registerValidator, validatorResult, authController.register);
router.post('/login', loginValidator, validatorResult, authController.login);

export default router;
