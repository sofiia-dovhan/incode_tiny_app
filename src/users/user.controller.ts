import { Request, Response, NextFunction } from 'express';
import { AppReq } from "../types/app-req.type";
import { UserModel } from './user.model';

export async function changeBoss(req: Request, res: Response, next: NextFunction) {
  const subordinateUserId = req.params.userId;
  const user = await UserModel.findById(subordinateUserId, { bossId: 1 }).exec();

  if (!user) {
    next(new Error('User is not found'));

    return;
  }

  // TODO
  if (user.bossId as unknown as string !== (req as AppReq).user._id) {
    next(new Error('This is not your subordinate'));

    return;
  }

  const updated = UserModel.findByIdAndUpdate(subordinateUserId, { bossId: req.body.newBossId }, { new: true });

  res.json({ message: 'User with updated boss', user: 'Updated' });
}
