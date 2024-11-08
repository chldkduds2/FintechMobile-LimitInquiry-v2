import React, { Suspense } from 'react';
import RootPage from '../rootPage';
import Result from '@/components/Result';

const ResultPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RootPage>
                <Result />
            </RootPage>
        </Suspense>
    );
};

export default ResultPage;
