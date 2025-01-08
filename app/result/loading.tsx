'use client';

import useUserLoginInfo from '@/services/UserLoginRepository/queries';
import useLoansListDate from '@/services/LoansListDateRepository/queries';
import SkeletonFallbackUI from '@/components/Common/Skeleton/FallbackUI/index';

const ResultLayout = () => {
    useUserLoginInfo();
    const { isLoading } = useLoansListDate('condition_approved');

    if (isLoading) {
        return <SkeletonFallbackUI />;
    }

    return;
};

export default ResultLayout;
