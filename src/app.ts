import express from 'express';
import authController from './auth.controller';
import userController from './user.controller';
import { config } from 'dotenv';

config();

const app = express();

app.use(express.json());

app.use('/auth', authController);

app.use('/users', userController);

export default app;
