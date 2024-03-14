export interface IUserOutputDto {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  gender: boolean;
  active: boolean;
  verify: boolean;
  avatar?: string;
  roleId: number;
  roleName: string;
  createdDate: Date;
  updatedDate?: Date;
  deletedDate?: Date;
  deletedUserId?: string;
}
