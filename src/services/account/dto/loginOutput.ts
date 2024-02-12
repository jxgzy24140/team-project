export interface ILoginOutput {
  UserId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: number;
  Gender: boolean;
  Active: boolean;
  Verify: boolean;
  Avatar: string;
  RoleId: number;
  CreatedDate: Date;
  UpdatedDate: Date;
  DeletedDate: Date;
  DeletedUserId: number;
}
