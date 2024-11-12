'use client';
import { useQuery } from '@tanstack/react-query';
import LoansListDetailDateApi from '@/services/LoansListDetailDateRepository/api';
import { QUERY_KEYS } from '@/services/queryKey';
import { LoansListDetailResponseType } from '@/types/LoansListDetailType/loansListDetail.type';

const useLoansListDetailDate = () => {
    return useQuery<LoansListDetailResponseType[], Error>({
        queryKey: QUERY_KEYS.loanValue.LoansListDetailState,
        queryFn: async () => {
            const data = await LoansListDetailDateApi.getLoansListDetailDateAPI();
            return data;
        },
    });
};

export default useLoansListDetailDate;
