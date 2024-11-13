'use client';
import React, { Suspense } from 'react';
import FallbackUI from '@/components/Common/Skeleton/FallbackUI/index';
import Result from '@/components/Result';
import useUserLoginInfo from '@/services/UserLoginRepository/queries';

const ResultPage = () => {
    useUserLoginInfo();

    return (
        <Suspense fallback={<FallbackUI />}>
            <Result />
        </Suspense>
    );
};

export default ResultPage;
