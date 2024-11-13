'use client';

import React, { Suspense } from 'react';
import FallbackUI from '@/components/Common/Skeleton/FallbackUI/index';
import LoansDetail from '@/components/LoansDetail';

const LoansDetailPage = () => {
    return (
        <Suspense fallback={<FallbackUI />}>
            <LoansDetail />
        </Suspense>
    );
};
export default LoansDetailPage;
