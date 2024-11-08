'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotApprovedLoansDataModalOpenState } from '@/store/Selectors/index';
import { setNotApprovedLoansDataModalOpenState } from '@/store/Slice/ModalOpenStateSlice/reducer';

const useListClickModal = () => {
    const [isFailedDataListDetailBtnClick, setIsFailedDataListDetailBtnClick] = useState<boolean>(false);
    const [isRejectedDataListDetailBtnClick, setIsRejectedDataListDetailBtnClick] = useState<boolean>(false);
    const dispatch = useDispatch();
    const notApprovedLoansDataModalOpenState = useSelector(selectNotApprovedLoansDataModalOpenState);

    const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setModalPortal(document.getElementById('modal-portal'));
    }, []);

    const handlerApprovedDataListClickModalOpen = () => {
        dispatch(setNotApprovedLoansDataModalOpenState(!notApprovedLoansDataModalOpenState));
    };

    const handlerFailedDataListDetailBtnClick = () => {
        setIsFailedDataListDetailBtnClick(!isFailedDataListDetailBtnClick);
    };

    const handlersRejectedDataListDetailBtnClick = () => {
        setIsRejectedDataListDetailBtnClick(!isRejectedDataListDetailBtnClick);
    };

    return {
        modalPortal,
        notApprovedLoansDataModalOpenState,
        isFailedDataListDetailBtnClick,
        isRejectedDataListDetailBtnClick,
        handlerApprovedDataListClickModalOpen,
        handlerFailedDataListDetailBtnClick,
        handlersRejectedDataListDetailBtnClick,
    };
};

export default useListClickModal;
