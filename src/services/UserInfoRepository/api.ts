import axiosInstance from '@/utils/CustomAxios/axios';
import { UserInfoStateType } from '@/types/UserInfoStateType/userInfoState.type';

class UserInfoApi {
    public async getUserInfoAPI(): Promise<UserInfoStateType> {
        try {
            const response = await axiosInstance.get('/account/v4/user/info');
            return response.data;
        } catch (error) {
            console.error('Error fetching loan list data:', error);
            throw error;
        }
    }
}

const userInfoApi = new UserInfoApi();
export default userInfoApi;
