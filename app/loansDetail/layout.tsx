'use client';

import React, { Suspense } from 'react';
import FallbackUI from '@/components/Common/Skeleton/FallbackUI/index';

const LoansDetailLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<FallbackUI />}>
            <div>{children}</div>
        </Suspense>
    );
};

export default LoansDetailLayout;
