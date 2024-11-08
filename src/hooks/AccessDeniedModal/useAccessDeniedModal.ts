'use client';
import { useState, useEffect } from 'react';
import useUserInfo from '@/services/UserInfoRepository/queries';

const useAccessDeniedModal = () => {
    const { data: userInfo, refetch } = useUserInfo();
    const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setModalPortal(document.getElementById('modal-portal'));
    }, []);

    const handleUserInfoRefetchBtnClick = () => {
        if (refetch) {
            refetch();
        }
    };

    return { modalPortal, userInfo, handleUserInfoRefetchBtnClick };
};
export default useAccessDeniedModal;
