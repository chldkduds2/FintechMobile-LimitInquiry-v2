'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import { LoansTypeFilterType } from '@/types/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';
import { removeFilter } from '@/store/Slice/LoansFilterBarStateSlice/reducer';
import { selectLoansTypeFilterBarState, selectIsLoansTypeModalOpenState } from '@/store/Selectors/index';
import {
    addLoansTypeFilter,
    removeLoansTypeFilter,
    resetLoansTypeFilter,
} from '@/store/Slice/LoansFilterBarStateSlice/LoansTypeFilterBarModalStateSlice/reducer';
import { setIsLoansTypeModalOpenState } from '@/store/Slice/ModalOpenStateSlice/reducer';
import useLoansListDate from '@/services/LoansListDateRepository/queries';

export const useLoansTypeFilterModal = () => {
    const dispatch = useDispatch();
    const typeFilters: LoansTypeFilterType[] = ['신용대출', '주택담보대출', '자동차담보대출', '대환대출'];
    const { data: approvedConditionsLoanListDate = [] } = useLoansListDate('condition_approved');

    const loansTypeFilterModalState = useSelector(selectLoansTypeFilterBarState) as unknown as string[];
    const isLoansTypeModalOpenState = useSelector(selectIsLoansTypeModalOpenState);
    const [modalPortal, setModalPortal] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setModalPortal(document.getElementById('modal-portal'));
    }, []);

    const toggleModal = () => {
        dispatch(setIsLoansTypeModalOpenState(!isLoansTypeModalOpenState));
        dispatch(removeFilter('대출종류'));
    };

    const handleCheckboxClick = (loansTypeFilter: string) => {
        const existingFilter = loansTypeFilterModalState.find((filter: string) => filter === loansTypeFilter);
        if (existingFilter) {
            dispatch(removeLoansTypeFilter(loansTypeFilter));
        } else {
            dispatch(addLoansTypeFilter(loansTypeFilter));
        }
    };

    let filteringDataListTotalCount = 0;
    const filteringDataListCounts = typeFilters.map((filter) => {
        const filteringDataListCount = approvedConditionsLoanListDate.filter((loan: LoansApply) =>
            loan.product.name.includes(filter)
        ).length;

        return { name: filter, count: filteringDataListCount };
    });

    filteringDataListTotalCount = filteringDataListCounts.reduce((total, item) => total + item.count, 0);

    if (loansTypeFilterModalState.length > 0) {
        filteringDataListTotalCount = filteringDataListCounts.reduce((total, item) => {
            if (loansTypeFilterModalState.includes(item.name)) {
                return total + item.count;
            }
            return total;
        }, 0);
    }

    const handleRefreshClick = () => {
        dispatch(resetLoansTypeFilter());
    };

    const handleResultBtnClick = () => {
        dispatch(setIsLoansTypeModalOpenState(!isLoansTypeModalOpenState));
    };

    return {
        modalPortal,
        typeFilters,
        filteringDataListCounts,
        filteringDataListTotalCount,
        loansTypeFilterModalState,
        isLoansTypeModalOpenState,
        toggleModal,
        handleCheckboxClick,
        handleRefreshClick,
        handleResultBtnClick,
    };
};
