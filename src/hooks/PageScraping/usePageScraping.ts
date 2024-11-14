'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useUserInfo from '@/services/UserInfoRepository/queries';
import useLoansListCountState from '@/services/LoansListCountStateRepository/queries';
import PageScrapingImage1 from '@/assets/image/PageScrapingImage1.svg';
import PageScrapingImage2 from '@/assets/image/PageScrapingImage2.svg';
import PageScrapingImage3 from '@/assets/image/PageScrapingImage3.svg';
import PageScrapingImage4 from '@/assets/image/PageScrapingImage4.svg';
import PageScrapingImage5 from '@/assets/image/PageScrapingImage5.svg';

const usePageScraping = () => {
    const { data: userInfo, isLoading } = useUserInfo();
    const { loansListCountState } = useLoansListCountState();
    const [progress, setProgress] = useState(0);
    const [dots, setDots] = useState(1);
    const [imageCurrentIndex, setImageCurrentIndex] = useState(0);
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
        const interval = setInterval(() => {
            setDots((prev) => (prev === 3 ? 1 : prev + 1));
        }, 350);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            router.push('/result');
        }
    }, [progress, router]);

    const images = [PageScrapingImage1, PageScrapingImage2, PageScrapingImage3, PageScrapingImage4, PageScrapingImage5];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [images.length]);

    return { userInfo, progress, dots, isLoading, images, imageCurrentIndex, loansListCountState };
};

export default usePageScraping;
