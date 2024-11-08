import React, { Suspense } from 'react';
import RootPage from '../../rootPage';
import LoansDetail from '@/components/LoansDetail';

const LoansDetailPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RootPage>
                <LoansDetail />
            </RootPage>
        </Suspense>
    );
};
export default LoansDetailPage;
