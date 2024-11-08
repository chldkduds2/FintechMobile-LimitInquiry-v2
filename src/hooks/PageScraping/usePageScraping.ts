'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useUserInfo from '@/services/UserInfoRepository/queries';

const usePageScraping = () => {
    const { data: userInfo, isLoading } = useUserInfo();
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (isLoading || !userInfo) return;

        const totalDuration = 10;
        const intervalDuration = 100;
        const increment = 100 / ((totalDuration * 1000) / intervalDuration);

        const timer = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + increment;
                if (newProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return newProgress;
            });
        }, intervalDuration);

        return () => clearInterval(timer);
    }, [userInfo, isLoading]);

    useEffect(() => {
        if (progress === 100) {
            router.push('/result');
        }
    }, [progress, router]);

    return { userInfo, progress, isLoading };
};

export default usePageScraping;
