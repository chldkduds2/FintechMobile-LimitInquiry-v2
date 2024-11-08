import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKey';
import { UserInfoStateType } from '@/types/UserInfoStateType/userInfoState.type';
import UserInfoApi from '@/services/UserInfoRepository/api';

const useUserInfo = () => {
    return useQuery<UserInfoStateType>({
        queryKey: [QUERY_KEYS.loginValue.userInfo],
        queryFn: async () => {
            const data = await UserInfoApi.getUserInfoAPI();
            return data;
        },
    });
};

export default useUserInfo;
