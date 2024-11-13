import React, { Component, ReactNode } from 'react';
import FallbackUI from './FallbackUI';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    handleRetry = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return <FallbackUI EventHandler={this.handleRetry} />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
