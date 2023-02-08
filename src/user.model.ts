import { Schema, model, connect } from 'mongoose';
import { Role } from './role.enum';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), required: true },
});

export const UserModel = model<IUser>('User', userSchema);
