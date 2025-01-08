'use client';

import { useState, useEffect } from 'react';
import ErrorBoundaryFallbackUI from '@/components/Common/ErrorBoundaryFallbackUI/index';

const ErrorBoundaryPage = ({ error }: { error: Error }) => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (error) {
            setHasError(true);
            setErrorMessage(error.message);
        }
    }, [error]);

    const handleRetry = () => {
        window.location.reload();
    };

    if (hasError) {
        return <ErrorBoundaryFallbackUI EventHandler={handleRetry} errorMessage={errorMessage} />;
    }

    return null;
};

export default ErrorBoundaryPage;
