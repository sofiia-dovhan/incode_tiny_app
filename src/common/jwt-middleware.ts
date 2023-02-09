import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppReq } from '../types/app-req.type';
import { Payload } from '../types/payload.type';

export async function jwtMiddleware(req: AppReq, res: Response, next: NextFunction) {
  const access = req.headers?.authorization?.split('Bearer ')[1];

  if (access) {
    const payload = jwt.verify(access, process.env.JWT_ACCESS_SECRET || 'secret') as Payload;

    req.user = payload;
    next();

    return;
  }

  next(new Error('Unauthorized'));

  return;
};
