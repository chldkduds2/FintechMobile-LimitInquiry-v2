'use client';

import React, { ReactNode, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@/store/index';
import FintechMobalieLayout from '@/components/Common/FintechMobalieLayout/index';
import ErrorBoundary from '@/components/Common/ErrorBoundary/index';
import SkeletonFallbackUI from '@/components/Common/Skeleton/FallbackUI/index';
import './globals.css';
import { motion, AnimatePresence } from 'framer-motion';

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

const RootPage = ({ children }: { children: ReactNode }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="page-transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <FintechMobalieLayout>
                            <ErrorBoundary>
                                <Suspense fallback={<SkeletonFallbackUI />}>{children}</Suspense>
                            </ErrorBoundary>
                        </FintechMobalieLayout>
                    </Provider>
                </QueryClientProvider>
            </motion.div>
        </AnimatePresence>
    );
};

export default RootPage;
