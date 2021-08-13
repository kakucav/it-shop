import express from 'express';

import * as productController from '../controllers/product.js';
import authenticateJWT from '../middleware/authenticator.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.post('/', authenticateJWT, upload.single('image'), productController.create);
router.get('/', productController.readAll);

export default router;
