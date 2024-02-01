import LoginModel from "@/models/account/loginModel";
import { action, observable } from "mobx";

class AuthenticationStore {
  @observable isLoading!: boolean;
  get isAuthenticated(): boolean {
    if (!localStorage.getItem("accessToken")) return false;

    return true;
  }

  @action
  public async login(input: LoginModel) {
    this.isLoading = true;
  }
}
export default AuthenticationStore;
