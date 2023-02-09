import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error | null, req: Request, res: Response, next: NextFunction) {
  if (err) {
    res.status(500).json({ message: 'Error', details: err.message });
  }
}
