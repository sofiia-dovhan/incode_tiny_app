import { Role } from './role.enum';
import { Types } from 'mongoose';

export interface IUser {
  _id: string,
  email: string,
  password: string,
  role: Role,
  bossId: typeof Types.ObjectId,
}
