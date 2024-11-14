'use client';

import React, { Suspense } from 'react';
import useUserLoginInfo from '@/services/UserLoginRepository/queries';
import useLoansListDate from '@/services/LoansListDateRepository/queries';
import SkeletonFallbackUI from '@/components/Common/Skeleton/FallbackUI/index';

const ResultLayout = ({ children }: { children: React.ReactNode }) => {
    useUserLoginInfo();
    const { isLoading } = useLoansListDate('condition_approved');

    if (isLoading) {
        return (
            <Suspense fallback={<SkeletonFallbackUI />}>
                <div>{children}</div>
            </Suspense>
        );
    }

    return <div> {children}</div>;
};

export default ResultLayout;
