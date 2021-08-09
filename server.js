import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import connectDB from './database/db.js';
import authRouter from './routers/auth.js';

const app = express();

const port = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', authRouter);

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));
