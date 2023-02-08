import { Request, Response, NextFunction } from 'express';

export async function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const access = req.headers?.authorization?.split('Bearer ')[1];

  if (access) {
    
  }

  throw new Error('Unauthorized');
};
