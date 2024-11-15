'use client';

import { useState, useEffect } from 'react';
import FallbackUI from '@/components/Common/ErrorBoundaryFallbackUI/FallbackUI/index';

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
        return <FallbackUI EventHandler={handleRetry} errorMessage={errorMessage} />;
    }

    return null;
};

export default ErrorBoundaryPage;
