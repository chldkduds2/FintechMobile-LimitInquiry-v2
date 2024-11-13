import { useEffect } from 'react';
import useUserLoginInfo from '@/services/UserLoginRepository/queries';
import { setAuthorizationToken } from '@/utils/CustomAxios/axios';

const useInitializeAuthToken = () => {
    const { data, isSuccess } = useUserLoginInfo();

    useEffect(() => {
        if (isSuccess && data?.token) {
            setAuthorizationToken(data.token);
        }
    }, [isSuccess, data]);
};

export default useInitializeAuthToken;
