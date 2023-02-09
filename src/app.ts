import express from 'express';
import authController from './auth/auth.router';
import userController from './users/user.router';
import { config } from 'dotenv';
import { errorHandler } from './common/error-handler.middleware';

config();

const app = express();

app.use(express.json());

app.use('/auth', authController);

app.use('/users', userController);

app.use(errorHandler);

export default app;
