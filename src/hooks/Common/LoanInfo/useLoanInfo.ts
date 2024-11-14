'use client';

import React, { useState, useEffect } from 'react';
import useLoansListDetailDate from '@/services/LoansListDetailDateRepository/queries';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoanCTAmodalOpenState } from '@/store/Selectors/index';
import { setIsLoanCTAmodalOpenState } from '@/store/Slice/ModalOpenStateSlice/reducer';

const useLoanInfo = () => {
    const dispatch = useDispatch();
    const isLoanCTAmodalOpenState = useSelector(selectIsLoanCTAmodalOpenState);
    const { data } = useLoansListDetailDate();
    const [openIndexes, setOpenIndexes] = useState<boolean[]>([]);
    const [isClickCTAbtn, setClickCTAbtn] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            setOpenIndexes(Array(data.length).fill(true));
        }
    }, [data]); // `isLoanCTAmodalOpenState` 의존성 배열에서 제거

    const toggleAll = () => {
        const newState = openIndexes.some((isOpen) => isOpen) ? false : true;
        setOpenIndexes(Array(data?.length).fill(newState));
    };

    const toggleOpen = (index: number) => {
        const newOpenIndexes = [...openIndexes];
        newOpenIndexes[index] = !newOpenIndexes[index];
        setOpenIndexes(newOpenIndexes);
    };

    const isAnyOpen = openIndexes.some((isOpen) => isOpen);

    const handlerloanCTAbtnClick = () => {
        dispatch(setIsLoanCTAmodalOpenState(!isLoanCTAmodalOpenState));
        setClickCTAbtn(true);
    };

    return {
        data,
        isAnyOpen,
        openIndexes,
        isLoanCTAmodalOpenState,
        isClickCTAbtn,
        toggleAll,
        toggleOpen,
        handlerloanCTAbtnClick,
    };
};
export default useLoanInfo;
