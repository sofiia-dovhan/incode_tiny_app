import express from 'express';

const userController = express.Router();

userController.post('/', (req, res) => {
  res.json({ toDo: 'should create user' });
});

userController.put('/:userId', (req, res) => {
  const { userId } = req.params; 
  res.json({ toDo: `should update user with ${userId} id` });
});

userController.delete('/:userId', (req, res) => {
  const { userId } = req.params; 
  res.status(204).end();
});

export default userController;
