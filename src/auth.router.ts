import express from 'express';
import { Payload } from './payload.type';
import { Role } from './role.enum';
import { UserModel } from './user.model';
import jwt from 'jsonwebtoken';
import { login, refresh, registration } from './auth.controller';

const authController = express.Router();

authController.post('/registration', registration);

// TODO add expiration times for tokens
authController.post('/login', login);

authController.post('/refresh', refresh);

export default authController;
