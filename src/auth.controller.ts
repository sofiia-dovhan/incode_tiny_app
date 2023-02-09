import express from 'express';
import { Payload } from './payload.type';
import { Role } from './role.enum';
import { UserModel } from './user.model';
import jwt from 'jsonwebtoken';

const authController = express.Router();

authController.post('/registration', async (req, res) => {
  const { email, password } = req.body;
  const user = await new UserModel({ email, password, role: Role.REGULAR }).save();

  res.json(user);
});

// TODO add expiration times for tokens
authController.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user || password !== user.password) {
    throw new Error('Email or password is incorrect');
  }

  const payload: Payload = { _id: user._id };
  const access = jwt.sign(payload, process.env.JWT_ACCESS_SECRET || 'secret');
  const refresh = jwt.sign(payload, process.env.JWT_REFRESH_SECRET || 'secret');

  res.json({ access, refresh });
});

authController.post('/refresh', (req, res) => {
  res.json({ toDo: 'should return new tokens' });
});

export default authController;
