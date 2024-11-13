'use client';

import usePageScraping from '@/hooks/PageScraping/usePageScraping';

const PageScraping = () => {
    const { userInfo, progress, dots } = usePageScraping();

    return (
        <div className="px-5">
            <div className="h-[30px]" />
            <p className="whitespace-pre text-[22px]">
                <b>{`67개의 금융사로부터 ${userInfo?.name}님의`}</b>
                <br />
                대출조건을 받아오고 있어요
            </p>
            <p className="mt-[10px] text-14-regular text-gray-50">
                {progress === 100 ? '완료!' : `${Math.round(progress)}% 확인중${'.'.repeat(dots)}`}
            </p>
        </div>
    );
};

export default PageScraping;
