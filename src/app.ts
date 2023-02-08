import express from 'express';
import authController from './auth.controller';
import userController from './user.controller';

const app = express();

app.use('/auth', authController);

app.use('/users', userController);



export default app;
