'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import {
    selectIsLoansTypeModalOpenState,
    selectNotApprovedLoansDataModalOpenState,
    selectCurrentPositionState,
    selectLoansFilterBarState,
} from '@/store/Selectors/index';
import { setCurrentPositionState, resetCurrentPositionState } from '@/store/Slice/CurrentPositionStateSlice/reducer';
import { usePathname, useSearchParams } from 'next/navigation';

const useFintechMobalieLayout = () => {
    const dispatch = useDispatch();
    const isLoansTypeModalOpenState = useSelector(selectIsLoansTypeModalOpenState);
    const notApprovedLoansDataModalOpenState = useSelector(selectNotApprovedLoansDataModalOpenState);
    const scrollRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const position = useSelector(selectCurrentPositionState);
    const loansFilterBarState = useSelector(selectLoansFilterBarState);
    const detailPageParams = searchParams.get('loanId');
    const currentKey = pathname === '/' ? pathname : `${pathname}?loanId=${detailPageParams}`;

    const saveScrollPosition = useCallback(
        throttle(() => {
            const scrollTop = scrollRef.current?.scrollTop ?? 0;
            dispatch(setCurrentPositionState(scrollTop));
            sessionStorage.setItem(currentKey, String(scrollTop));
        }, 100),
        [dispatch, currentKey]
    );

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', saveScrollPosition);
            return () => {
                currentRef.removeEventListener('scroll', saveScrollPosition);
                saveScrollPosition.cancel();
            };
        }
    }, [saveScrollPosition]);

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(setCurrentPositionState(0));
    };

    const restoreScrollPosition = useCallback(() => {
        dispatch(resetCurrentPositionState());
        const savedPosition = sessionStorage.getItem(currentKey) || '0';
        scrollRef.current?.scrollTo({ top: Number(savedPosition), behavior: 'smooth' });
    }, [currentKey, dispatch]);

    useEffect(() => {
        restoreScrollPosition();
    }, [restoreScrollPosition]);

    useEffect(() => {
        if (loansFilterBarState.length > 0 && scrollRef.current) {
            scrollRef.current.scrollTo({ top: 290, behavior: 'smooth' });
        }
    }, [loansFilterBarState]);

    return {
        scrollRef,
        position,
        isModalOpen: isLoansTypeModalOpenState || notApprovedLoansDataModalOpenState,
        pathname,
        scrollToTop,
    };
};

export default useFintechMobalieLayout;
