import http from "@/services/httpService";
import { ILoginInput, ILoginOutput } from "@/services/auth/dto";
import { IHttpRequest } from "../httpRequestDto";

class AuthService {
  async login(input: ILoginInput): Promise<IHttpRequest<ILoginOutput>> {
    const response = await http.post("auth/login", input);
    return response.data;
  }

  async logOut() {
    await http.post("auth/logout");
  }

  async refreshToken() {
    const response = await http.post("auth/refresh-token");
    return response.data;
  }

  async getCurrentLoginInformation() {
    const response = await http.get("auth/get-current-login-info");
    return response.data;
  }
}

export default new AuthService();
