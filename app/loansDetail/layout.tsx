'use client';

import React, { Suspense } from 'react';
import useUserLoginInfo from '@/services/UserLoginRepository/queries';
import FallbackUI from '@/components/Common/Skeleton/FallbackUI/index';

const LoansDetailLayout = ({ children }: { children: React.ReactNode }) => {
    useUserLoginInfo();

    return (
        <Suspense fallback={<FallbackUI />}>
            <div>{children}</div>
        </Suspense>
    );
};

export default LoansDetailLayout;
