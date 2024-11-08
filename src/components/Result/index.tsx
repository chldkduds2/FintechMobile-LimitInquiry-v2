'use client';
import React from 'react';
import MainTitleContainer from '../Common/MainTitleContainer/index';
import LoanRateLimitList from '../Common/MainTitleContainer/LoanRateLimitList';
import LoanFilterBar from '../Common/LoansFilterBar/index';
import FintechMobalieContentLayout from '@/components/Common/FintechMobalieLayout/FintechMobalieContentLayout/index';
import LoansListContainert from '../Common/LoansListContainer/index';
import Footer from '@/components/Common/Footer/index';
import { useSelector } from 'react-redux';
import { selectCurrentPositionState } from '@/store/Selectors/index';
import { usePathname } from 'next/navigation';

const Result = () => {
    const position = useSelector(selectCurrentPositionState);
    const pathname = usePathname();
    return (
        <React.Fragment>
            <FintechMobalieContentLayout>
                <MainTitleContainer />
                <LoanRateLimitList />
            </FintechMobalieContentLayout>
            <div className="h-[10px] w-full bg-gray-99" />
            <FintechMobalieContentLayout>
                <div className={` ${Number(position) > 260 && pathname === '/' ? 'hidden' : ''} `}>
                    <LoanFilterBar />
                </div>
                <LoansListContainert />
            </FintechMobalieContentLayout>
            <Footer />
        </React.Fragment>
    );
};

export default Result;
