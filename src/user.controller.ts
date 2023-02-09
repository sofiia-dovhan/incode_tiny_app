import express, { NextFunction, Response } from 'express';
import { AppReq } from './app-req.type';
import { jwtMiddleware } from './jwt-middleware';
import { UserModel } from './user.model';
import { Role } from './role.enum';

const userController = express.Router();

// TODO define AppReq type globally instead default express request
userController.get('/', jwtMiddleware as any, (async (req: AppReq, res: Response, next: NextFunction) => {
  const userId = req.user._id;
  const user = await UserModel.findById(userId).exec();

  if (!user) {
    next(new Error('User is not found'));

    return;
  }

  // TODO any - govno
  let response: any;

  if (user.role === Role.REGULAR) {
    const { password, ..._user } = user;

    response = _user;
  }

  res.json(response);
}) as any); 

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
