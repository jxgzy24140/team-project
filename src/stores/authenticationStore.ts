import LoginModel from "@/models/account/loginModel";
import accountService from "@/services/account/accountService";
import type { UserOutputDto } from "@/services/account/dto";
import { action, observable } from "mobx";

class AuthenticationStore {
  @observable isLoading!: boolean;
  @observable userProfile!: UserOutputDto;

  get isAuthenticated(): boolean {
    if (!localStorage.getItem("accessToken")) return false;
    return true;
  }

  @action
  public async login(input: LoginModel): Promise<UserOutputDto> {
    this.isLoading = true;
    var result = await accountService.login(input);
    return result;
  }
}
export default AuthenticationStore;
