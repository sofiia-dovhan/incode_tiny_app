import express from 'express';
import { Role } from './role.enum';
import { UserModel } from './user.model';

const authController = express.Router();

authController.post('/registration', async (req, res) => {
  const { email, password } = req.body;
  const user = await new UserModel({ email, password, role: Role.REGULAR });

  res.json(user);
});

authController.post('/login', (req, res) => {
  res.json({ toDo: 'should login user' });
});

authController.post('/refresh', (req, res) => {
  res.json({ toDo: 'should return new tokens' });
});

export default authController;
