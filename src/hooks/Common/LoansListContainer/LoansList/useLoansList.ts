import { useRouter } from 'next/navigation';
import { resetLoansTypeFilter } from '@/store/Slice/LoansFilterBarStateSlice/LoansTypeFilterBarModalStateSlice/reducer';
import { resetFilter } from '@/store/Slice/LoansFilterBarStateSlice/reducer';
import { useTransition } from 'react';
import { useDispatch } from 'react-redux';

const useLoansList = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isPending, startTransition] = useTransition();

    const handleLoanClick = (loanId: number) => {
        startTransition(() => {
            router.push(`/loansDetail/${loanId}?loanId=${loanId}`);
        });
    };

    const handleRefreshClick = () => {
        dispatch(resetFilter());
        resetLoansTypeFilter();
    };

    return { isPending, handleLoanClick, handleRefreshClick };
};

export default useLoansList;
