import type { ILoginInput, UserOutputDto } from "@/services/account/dto";
import authService from "@/services/auth/authService";
import { action, makeAutoObservable, observable } from "mobx";

class AuthenticationStore {
  @observable isAuthenticated: boolean = false;
  @observable userProfile: UserOutputDto | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  public async getAuthentication() {
    if (sessionStorage.getItem("accessToken")) {
      const response = await authService.getCurrentLoginInformation();
      if (response.success && response.data) {
        this.isAuthenticated = true;
        this.userProfile = response.data;
      }
    } else {
      this.isAuthenticated = false;
      this.userProfile = null;
    }
  }

  @action
  public async login(input: ILoginInput): Promise<any> {
    const response = await authService.login(input);
    if (response && response.success && response.data) {
      sessionStorage.setItem("accessToken", response.data.accessToken);
      // response.data.user.roleId == 1
      //   ? (window.location.href = "/home")
      //   : (window.location.href = "/admin");
      this.isAuthenticated = true;
      this.userProfile = response.data.user;
      return true;
    }
    if (response && !response.success) {
      sessionStorage.removeItem("accessToken");
      this.isAuthenticated = false;
      this.userProfile = null;
    }
  }

  @action
  public async logout(): Promise<any> {
    // await authService.logOut();
    sessionStorage.removeItem("accessToken");
    // this.userProfile = null;
    // this.isAuthenticated = false;
    window.location.href = "/auth/login";
  }

  @action
  async refreshToken(): Promise<any> {
    const result = await authService.refreshToken();
    if (result && result.success && result.data) {
      this.isAuthenticated = true;
      return result.data;
    } else {
      this.isAuthenticated = false;
      return null;
    }
  }
}
export default AuthenticationStore;
