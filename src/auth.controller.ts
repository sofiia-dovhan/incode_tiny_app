import express from 'express';

const authController = express.Router();

authController.post('/registration', (req, res) => {
  res.json({ toDo: 'should register user' });
});

authController.post('/login', (req, res) => {
  res.json({ toDo: 'should login user' });
});

authController.post('/refresh', (req, res) => {
  res.json({ toDo: 'should return new tokens' });
});

export default authController;
