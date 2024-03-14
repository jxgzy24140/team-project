import http from "@/services/httpService";
import { ILoginInput, ILoginOutput } from "@/services/auth/dto";
import { IHttpRequest } from "../httpRequestDto";

class AuthService {
  async login(input: ILoginInput): Promise<IHttpRequest<ILoginOutput>> {
    const response = await http.post("auth/login", input);
    return response.data;
  }

  async logOut() {
    const response = await http.post("auth/logout");
    return response.data;
  }

  async refreshToken() {}
}

export default new AuthService();
