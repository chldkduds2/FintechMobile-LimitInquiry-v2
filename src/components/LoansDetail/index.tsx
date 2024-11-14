'use client';

import React, { useEffect, useState } from 'react';
import useLoansListDateRepository from '@/services/LoansListDateRepository/queries';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoanTitle from './LoanTitle/index';
import LoanContent from './LoanContant/index';
import LoanCalculator from './LoanCalculator/index';
import LoanInfo from './LoanInfo/index';
import useLoansRateLimitList from '@/hooks/Common/LoansRateLimitList/useLoansRateLimitList';
import useLoansList from '@/hooks/Common/LoansListContainer/LoansList/useLoansList';
import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';
import { useSearchParams } from 'next/navigation';

const LoansDetail = () => {
    const { data: approvedConditionsLoanListDate = [] } = useLoansListDateRepository('condition_approved');
    const [loanDetails, setLoanDetails] = useState<LoansApply | null>(null);
    const { isPending: isLoansRateLimitListPending } = useLoansRateLimitList();
    const { isPending: isLoansListPending } = useLoansList();

    const searchParams = useSearchParams();
    const loanId: number = Number(searchParams.get('loanId'));

    useEffect(() => {
        if (loanId !== null && loanId > 0) {
            const loan = approvedConditionsLoanListDate.find((loanApply) => loanApply.id === loanId);
            setLoanDetails(loan || null);
        }
    }, [loanId, approvedConditionsLoanListDate]);

    if (isLoansRateLimitListPending || isLoansListPending || loanDetails === null) {
        return;
    }

    const hasRedemptionFeeTag = loanDetails.product.tags.some((tag) => tag.text === '중도상환수수료');

    return (
        <div className="w-[100vw] max-w-[427px]">
            <FintechMobalieContentLayout>
                <LoanTitle loanDetails={loanDetails} />
            </FintechMobalieContentLayout>

            <div className="h-[8px] w-full bg-gray-99" />
            <FintechMobalieContentLayout>
                <LoanContent hasRedemptionFeeTag={hasRedemptionFeeTag} />
            </FintechMobalieContentLayout>
            <div className="h-[8px] w-full bg-gray-99" />

            <LoanCalculator
                loanLimit={loanDetails.condition.loanLimit || 0}
                loanRate={loanDetails.condition.loanRate || 0}
            />
            <div className="h-[8px] w-full bg-gray-99" />

            <LoanInfo />
        </div>
    );
};

export default LoansDetail;
