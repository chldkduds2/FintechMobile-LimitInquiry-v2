'use client';

import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@/store/index';
import FintechMobalieLayout from '@/components/Common/FintechMobalieLayout/index';
import ErrorBoundary from '@/components/Common/ErrorBoundary';
import Skeleton from '@/components/Common/Skeleton/index';
import './globals.css';

const defaultQueryOptions = {
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
    suspense: true,
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: defaultQueryOptions,
    },
});

const RootPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <FintechMobalieLayout>
                    <ErrorBoundary>
                        <Suspense fallback={<Skeleton width="300px" height="40px" />}>{children}</Suspense>
                    </ErrorBoundary>
                </FintechMobalieLayout>
            </Provider>
        </QueryClientProvider>
    );
};

export default RootPage;
