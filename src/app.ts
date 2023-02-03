import express from 'express';
import userController from './user.controller';

const app = express();

app.use('/users', userController);



export default app;
