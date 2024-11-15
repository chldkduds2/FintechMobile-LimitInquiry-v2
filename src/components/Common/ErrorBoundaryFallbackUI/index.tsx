import React, { Component, ReactNode } from 'react';
import FallbackUI from './FallbackUI/index';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
        this.setState({ errorMessage: error.message });
    }

    handleRetry = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return <FallbackUI EventHandler={this.handleRetry} errorMessage={this.state.errorMessage} />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
