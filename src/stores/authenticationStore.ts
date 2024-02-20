import accountService from "@/services/account/accountService";
import type { ILoginInput, UserOutputDto } from "@/services/account/dto";
import { action, observable } from "mobx";

class AuthenticationStore {
  @observable isLoading!: boolean;
  @observable userProfile!: UserOutputDto;

  get isAuthenticated(): boolean {
    if (!localStorage.getItem("accessToken")) return false;
    return true;
  }

  @action
  public async login(input: ILoginInput): Promise<any> {
    this.isLoading = true;
    var result = await accountService.login(input);
    if (result) {
      localStorage.setItem("accessToken", result.accessToken);
    }
  }

  @action
  async getProfile(token: string): Promise<any> {
    var response = await accountService.getProfile(token);
    if (response) {
      this.userProfile = response;
    }
  }
}
export default AuthenticationStore;
