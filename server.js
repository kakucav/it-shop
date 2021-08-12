import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import connectDB from './database/db.js';
import authRouter from './routers/auth.js';
import categoryRouter from './routers/category.js';
import productRouter from './routers/product.js';

const app = express();

const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));
