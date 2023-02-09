import express, { NextFunction, Request, Response } from 'express';
import { Payload } from './payload.type';
import { Role } from './role.enum';
import { UserModel } from './user.model';
import jwt from 'jsonwebtoken';

export async function registration(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await new UserModel({ email, password, role: Role.REGULAR }).save();

  res.json(user);
}

// TODO add expiration times for tokens
export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email }).exec();

  if (!user || password !== user.password) {
    next(new Error('Email or password is incorrect'));

    return;
  }

  const payload: Payload = { _id: user._id };
  const access = jwt.sign(payload, process.env.JWT_ACCESS_SECRET || 'secret');
  const refresh = jwt.sign(payload, process.env.JWT_REFRESH_SECRET || 'secret');

  res.json({ access, refresh });
}

export async function refresh(req: Request, res: Response) {
  res.json({ toDo: 'should return new tokens' });
};
