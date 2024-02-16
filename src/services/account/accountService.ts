import http from "@/services/httpService";
import { ILoginInput } from "@/services/account/dto/loginInput";
import { IRegisterInput } from "@/services/account/dto/registerInput";
import { IRegisterOutput, UserOutputDto } from "./dto";

class AccountService {
  public async login(loginInput: ILoginInput): Promise<UserOutputDto> {
    const response = await http.post("api/auth/login", loginInput);
    return response.data.result;
  }

  public async register(
    registerInput: IRegisterInput
  ): Promise<IRegisterOutput> {
    const response = await http.post("api/auth/register", registerInput);
    return response.data.result;
  }

  public async getUser(id: any): Promise<UserOutputDto> {
    const response = await http.post("api/user/register");
    return response.data.result;
  }
}

export default new AccountService();
