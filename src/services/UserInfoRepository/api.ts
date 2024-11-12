import axios from 'axios';
import axiosInstance from '@/utils/CustomAxios/axios';
import { UserInfoStateType } from '@/types/UserInfoStateType/userInfoState.type';

class UserInfoApi {
    public async getUserInfoAPI(): Promise<UserInfoStateType> {
        try {
            const response = await axiosInstance.get('/account/v4/user/info');
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}

export default new UserInfoApi();
