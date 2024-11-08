'use client';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from '@/store/index';
import FintechMobalieLayout from '@/components/Common/FintechMobalieLayout/index';
import './globals.css';

const defaultQueryOptions = {
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: true,
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: defaultQueryOptions,
    },
});

const RootPage = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        if (!document.getElementById('modal-portal')) {
            const modalPortal = document.createElement('div');
            modalPortal.id = 'modal-portal';
            document.body.appendChild(modalPortal);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <FintechMobalieLayout>{children}</FintechMobalieLayout>
            </Provider>
        </QueryClientProvider>
    );
};

export default RootPage;
