import { Schema, model, connect, Types } from 'mongoose';
import { Role } from '../types/role.enum';
import { IUser } from '../types/user.interface';

const MODEL_NAME = 'User';

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), required: true },
  bossId: { type: Types.ObjectId, ref: MODEL_NAME, required: true }
});

export const UserModel = model<IUser>(MODEL_NAME, userSchema);
