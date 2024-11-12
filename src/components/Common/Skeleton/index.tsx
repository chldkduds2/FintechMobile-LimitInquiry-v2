import React from 'react';

interface SkeletonProps {
    width?: string;
    height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '20px' }) => {
    return (
        <div
            style={{
                width,
                height,
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                animation: 'skeleton-loading 1.2s infinite ease-in-out',
            }}
        />
    );
};

export default Skeleton;
