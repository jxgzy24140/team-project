import { IVerifyAccount } from "@/services/notification/dto";
import http from "@/services/httpService";

class NotificationService {
  public async verifyAccount(input: IVerifyAccount): Promise<any> {
    const response = await http.get("api/auth/verify", { params: { input } });
    if (response) {
    }
  }
}

export default new NotificationService();
