'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoanCTAmodalOpenState } from '@/store/Slice/ModalOpenStateSlice/reducer';
import { selectIsLoanCTAmodalOpenState } from '@/store/Selectors';

const useLoanCTAmodal = () => {
    const dispatch = useDispatch();
    const isLoanCTAmodalOpenState = useSelector(selectIsLoanCTAmodalOpenState);
    const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setModalPortal(document.getElementById('modal-portal'));
    }, []);

    const handlerModalClose = () => {
        dispatch(setIsLoanCTAmodalOpenState(!isLoanCTAmodalOpenState));
    };
    return { modalPortal, handlerModalClose };
};
export default useLoanCTAmodal;
