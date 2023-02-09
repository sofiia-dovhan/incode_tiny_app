import express from 'express';
import authController from './auth.router';
import userController from './user.controller';
import { config } from 'dotenv';
import { errorHandler } from './error-handler.middleware';

config();

const app = express();

app.use(express.json());

app.use('/auth', authController);

app.use('/users', userController);

app.use(errorHandler);

export default app;
