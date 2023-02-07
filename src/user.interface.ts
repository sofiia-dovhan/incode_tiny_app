import { Role } from './role.enum';

export interface IUser {
  _id: string,
  email: string,
  password: string,
  role: Role,
}
