import http from "@/services/httpService";
import { ILoginInput } from "@/services/account/dto/loginInput";
import { IRegisterInput } from "@/services/account/dto/registerInput";
import {
  IChangeUserPassword,
  IRegisterOutput,
  UserOutputDto,
  IUpdateUserInput,
} from "./dto";

class AccountService {
  async login(loginInput: ILoginInput): Promise<any> {
    const response = await http.post("api/auth/login", loginInput);
    return response.data.result;
  }

  async register(registerInput: IRegisterInput): Promise<IRegisterOutput> {
    const response = await http.post("api/auth/register", registerInput);
    return response.data.result;
  }

  public async getUser(id: any): Promise<UserOutputDto> {
    const response = await http.post("api/user/register");
  async changePassword(input: IChangeUserPassword): Promise<UserOutputDto> {
    const response = await http.put("api/auth/change-password", input);
    return response.data.result;
  }

  async updateUser(input: IUpdateUserInput): Promise<UserOutputDto> {
    const response = await http.patch("api/user", input);
    return response.data.result;
  }

  async deleteUser(id: any): Promise<UserOutputDto> {
    const response = await http.delete("api/user", { params: { userId: id } });
    return response.data.result;
  }

  async getUsers(pageNumber: number, pageSize: number): Promise<UserOutputDto> {
    const response = await http.get("api/users", {
      params: { pageNumber, pageSize },
    });
    return response.data.result;
  }

  async getUser(id: any): Promise<UserOutputDto> {
    const response = await http.get("api/user", { params: id });
    return response.data.result;
  }

  async getProfile(accessToken: string): Promise<UserOutputDto> {
    const response = await http.get("api/user/get-profilem", {
      params: accessToken,
    });
    return response.data.result;
  }
}

export default new AccountService();
