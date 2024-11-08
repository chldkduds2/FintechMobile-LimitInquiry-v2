'use client';
import { selectLoansListSortState } from '@/store/Selectors';
import { setIsRateSortState } from '@/store/Slice/LoansListSortStateSlice/reducer';
import { useSelector, useDispatch } from 'react-redux';

const useLoansListHeader = () => {
    const isRateSortState = useSelector(selectLoansListSortState);
    const dispatch = useDispatch();

    const toggleSort = () => {
        dispatch(setIsRateSortState(!isRateSortState));
    };

    return { isRateSortState, toggleSort };
};

export default useLoansListHeader;
