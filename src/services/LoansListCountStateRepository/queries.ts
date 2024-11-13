'use client';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import useLoansFilteringAndSortingList from '@/hooks/Common/LoansFilteringAndSortingList/useLoansListFiltering';
import {
    LoansListCountStateType,
    initialLoansListCountState,
} from '@/types/LoansListCountStateType/loansListCountState.type';

// [ 조건부 승인 대출 상품 건수 쿼리 ]
const useLoansListCountState = () => {
    const { LoansFilteringAndSortingList } = useLoansFilteringAndSortingList();

    // approvedConditionsLoansFilteringList의 길이를 기반으로 쿼리 키 생성
    const queryKey = QUERY_KEYS.loanValue.LoansListCountState(LoansFilteringAndSortingList?.length ?? 0);

    const { data: loansListCountState = initialLoansListCountState } = useQuery<LoansListCountStateType>({
        queryKey: queryKey,
        queryFn: () => {
            return { loansListCountState: LoansFilteringAndSortingList?.length ?? 0 };
        },
    });

    return { loansListCountState: loansListCountState.loansListCountState };
};

export default useLoansListCountState;
