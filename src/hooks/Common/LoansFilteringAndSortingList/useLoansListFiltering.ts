'use client';
import { useSelector } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import useLoansListDate from '@/services/LoansListDateRepository/queries';
import {
    selectLoansFilterBarState,
    selectLoansTypeFilterBarState,
    selectLoansListSortState,
} from '@/store/Selectors/index';
import { LoansTypeFilterType } from '@/types/LoansListDateType/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';

const useLoansFilteringAndSortingList = () => {
    const { data: LoansListDate = [], error } = useLoansListDate('condition_approved');
    const loansFilterBarState = useSelector(selectLoansFilterBarState) as string[];
    const loansTypeFilterModalState = useSelector(selectLoansTypeFilterBarState) as string[];
    const isRateSortState = useSelector(selectLoansListSortState);
    const [LoansFilteringAndSortingList, setLoansFilteringAndSortingList] = useState<LoansApply[]>(LoansListDate);

    const filterAndSortLoans = useCallback(() => {
        let filteredList = LoansListDate;

        // 필터링 로직
        if (loansFilterBarState.includes('대출종류')) {
            const loanTypes: LoansTypeFilterType[] = ['신용대출', '주택담보대출', '자동차담보대출', '대환대출'];
            filteredList = filteredList.filter((loan) => loanTypes.some((type) => loan.product.name.includes(type)));
        } else if (loansFilterBarState.length > 0) {
            filteredList = filteredList.filter((loan) =>
                loan.product.tags.some((tag) => loansFilterBarState.includes(tag.text))
            );
        }

        if (loansTypeFilterModalState.length > 0) {
            filteredList = filteredList.filter((loan) =>
                loansTypeFilterModalState.some((type) => loan.product.name.includes(type))
            );
            if (loansFilterBarState.length > 1) {
                filteredList = filteredList.filter((loan) =>
                    loan.product.tags.some((tag) => loansFilterBarState.includes(tag.text))
                );
            }
        }

        // 정렬 로직
        filteredList = filteredList.sort((a, b) => {
            return isRateSortState
                ? (a.condition?.loanRate ?? 0) - (b.condition?.loanRate ?? 0)
                : (b.condition?.loanLimit ?? 0) - (a.condition?.loanLimit ?? 0);
        });

        return filteredList;
    }, [LoansListDate, loansFilterBarState, loansTypeFilterModalState, isRateSortState]);

    useEffect(() => {
        const updatedList = filterAndSortLoans();
        setLoansFilteringAndSortingList((prevList) => {
            if (JSON.stringify(prevList) !== JSON.stringify(updatedList)) {
                return updatedList;
            }
            return prevList;
        });
    }, [filterAndSortLoans]);

    return { LoansFilteringAndSortingList, error };
};

export default useLoansFilteringAndSortingList;
