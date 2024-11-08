import RootPage from './rootPage';
import PageScraping from '@/components/pageScraping';
import React, { Suspense } from 'react';

const MainPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RootPage>
                <PageScraping />
            </RootPage>
        </Suspense>
    );
};

export default MainPage;
