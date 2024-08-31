// SkeletonLoader.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
    return (
        <div className="skeleton-loader">
            <Skeleton height={80} width={'100%'} />
            <Skeleton height={80} width={'100%'} />
            <Skeleton height={80} width={'100%'} />
            <Skeleton height={80} width={'100%'} />
            <Skeleton height={80} width={'100%'} />
        </div>
    );
};

export default SkeletonLoader;
