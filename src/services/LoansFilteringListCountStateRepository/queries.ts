'use client';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import useLoansFilteringAndSortingList from '@/hooks/Common/LoansFilteringAndSortingList/useLoansListFiltering';
import {
    LoansFilteringListCountStateType,
    initialLoansFilteringListCountState,
} from '@/types/LoansFilteringListCountStateType/loansFilteringListCountState.type';

// [ 조건부 승인 대출 상품 건수 쿼리 ]
const useLoansFilteringListCountState = () => {
    const { LoansFilteringAndSortingList } = useLoansFilteringAndSortingList();

    // approvedConditionsLoansFilteringList의 길이를 기반으로 쿼리 키 생성
    const queryKey = QUERY_KEYS.loanValue.LoansFilteringListCountState(LoansFilteringAndSortingList?.length ?? 0);

    const { data: loansFilteringListCountState = initialLoansFilteringListCountState } =
        useQuery<LoansFilteringListCountStateType>({
            queryKey: queryKey,
            queryFn: () => {
                return { loansFilteringListCountState: LoansFilteringAndSortingList?.length ?? 0 };
            },
        });

    return { loansFilteringListCountState: loansFilteringListCountState.loansFilteringListCountState };
};

export default useLoansFilteringListCountState;
