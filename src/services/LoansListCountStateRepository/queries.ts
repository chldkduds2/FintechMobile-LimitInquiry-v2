'use client';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/services/queryKey';
import useLoansListDate from '../LoansListDateRepository/queries';
import {
    LoansListCountStateType,
    initialLoansListCountState,
} from '@/types/LoansListCountStateType/loansListCountState.type';

const useLoansListCountState = () => {
    const { data: LoansListData } = useLoansListDate(null);

    const uniqueBankNamesCount = LoansListData ? new Set(LoansListData.map((item) => item.product.bank.name)).size : 0;

    const queryKey = QUERY_KEYS.loanValue.LoansFilteringListCountState(uniqueBankNamesCount);

    const { data: loansListCountState = initialLoansListCountState } = useQuery<LoansListCountStateType>({
        queryKey: queryKey,
        queryFn: () => {
            return { loansListCountState: uniqueBankNamesCount };
        },
    });

    return { loansListCountState: loansListCountState.loansListCountState };
};

export default useLoansListCountState;
