import type { ILoginInput, UserOutputDto } from "@/services/account/dto";
import authService from "@/services/auth/authService";
import { action, observable } from "mobx";

class AuthenticationStore {
  @observable isLoading!: boolean;
  @observable isAuthenticated: boolean = false;
  @observable userProfile!: UserOutputDto | null;

  @action
  getAuthenticatin() {
    if (sessionStorage.getItem("accessToken"))
      return (this.isAuthenticated = true);
    return (this.isAuthenticated = false);
  }

  @action
  public async login(input: ILoginInput): Promise<any> {
    this.isLoading = true;
    const response = await authService.login(input);
    if (response && response.success && response.data) {
      sessionStorage.setItem("accessToken", response.data.accessToken);
      this.userProfile = response.data.user;
      this.isAuthenticated = true;
      this.isLoading = false;
    }
  }

  @action
  public async logout(): Promise<any> {
    this.isLoading = true;
    const response = await authService.logOut();
    if (response && response.success && response.data) {
      sessionStorage.removeItem("accessToken");
      this.userProfile = null;
      this.isAuthenticated = false;
    }
  }
}
export default AuthenticationStore;
