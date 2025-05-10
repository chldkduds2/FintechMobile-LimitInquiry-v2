import axiosInstance from "@/utils/CustomAxios/axios";
import { UserLoginStateType } from "@/types/UserLoginStateType/UserloginState.type";

class UserLoginApi {
  public async getUserLoginInfoAPI(): Promise<UserLoginStateType> {
    try {
      const loginData = {
        encryptedPincode: process.env.NEXT_PUBLIC_ENCRYPTED_PINCODE,
        userDevice: {
          deviceId: process.env.NEXT_PUBLIC_USER_DEVICE_ID,
          appVersion: process.env.NEXT_PUBLIC_APP_VERSION,
          osType: process.env.NEXT_PUBLIC_OS_TYPE,
          manufacture: process.env.NEXT_PUBLIC_MANUFACTURE,
          osVersion: process.env.NEXT_PUBLIC_OS_VERSION,
          notiToken: process.env.NEXT_PUBLIC_NOTI_TOKEN,
          model: process.env.NEXT_PUBLIC_MODEL,
          appsflyerId: process.env.NEXT_PUBLIC_APPSFLYER_ID,
          notiEnabled: process.env.NEXT_PUBLIC_NOTI_ENABLED === "true",
        },
        userId: parseInt(process.env.NEXT_PUBLIC_USER_ID || "0"),
        mixpanelId: process.env.NEXT_PUBLIC_MIXPANEL_ID,
      };

      const response = await axiosInstance.post(
        "/account/v4/user/login",
        loginData
      );
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}

export default new UserLoginApi();
