'use client';

import useUserInfo from '@/services/UserInfoRepository/queries';

const useAccessDeniedModal = () => {
    const { refetch } = useUserInfo();

    const handleUserInfoRefetchBtnClick = () => {
        refetch();
    };

    return { handleUserInfoRefetchBtnClick };
};

export default useAccessDeniedModal;
