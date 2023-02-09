import express, { NextFunction, Response } from 'express';
import { AppReq } from '../types/app-req.type';
import { jwtMiddleware } from '../common/jwt-middleware';
import { UserModel } from './user.model';
import { Role } from '../types/role.enum';
import { IUser } from '../types/user.interface';

const userController = express.Router();

// TODO define AppReq type globally instead default express request
userController.get('/', jwtMiddleware as any, (async (req: AppReq, res: Response, next: NextFunction) => {
  const userId = req.user._id;
  const user = await UserModel.findById(userId, { password: 0 }).exec();

  if (!user) {
    next(new Error('User is not found'));

    return;
  }

  let response: IUser[] = [];

  if (user.role === Role.BOSS) {
    response = await UserModel.find({ bossId: userId }, { password: 0 }).exec();
  } else if (user.role === Role.ADMINISTRATOR) {
    response = await UserModel.find({ }, { password: 0 }).exec();
  }

  response.push(user);

  res.json(response);
}) as any); 

userController.put('/:userId', (req, res) => {
  const { userId } = req.params; 
  res.json({ toDo: `should update user with ${userId} id` });
});

export default userController;
