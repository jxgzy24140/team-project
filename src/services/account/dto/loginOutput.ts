export interface ILoginOutput {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  gender: boolean;
  active: boolean;
  verify: boolean;
  avatar: string;
  roleId: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;
  deletedUserId: number;
}
