import http from "@/services/httpService";
import { ILoginInput } from "@/services/account/dto/loginInput";
import { IRegisterInput } from "@/services/account/dto/registerInput";

class AccountService {
  public async login(loginInput: ILoginInput): Promise<any> {
    const response = await http.post("api/v1/auth/login", loginInput);
    return response.data.result;
  }

  public async register(registerInput: IRegisterInput): Promise<any> {
    const response = await http.post("api/v1/auth/register", registerInput);
    return response.data.result;
  }
}

export default AccountService;
