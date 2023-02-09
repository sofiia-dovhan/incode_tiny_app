import { UserModel } from "./user.model";

let adminId: string;

export async function getAdminId() {
  if (!adminId) {
    const admin = await UserModel.findOne({ email: 'admin@gmail.com' }).exec();
    
    adminId = admin!._id;
  }

  return adminId;
}
