'use client';

import Image from 'next/image';
import usePageScraping from '@/hooks/PageScraping/usePageScraping';

const PageScraping = () => {
    const { userInfo, progress, dots, images, imageCurrentIndex, loansListCountState } = usePageScraping();

    return (
        <div className="px-5">
            <div className="h-[30px]" />
            <p className="whitespace-pre text-[22px]">
                <b>{`${loansListCountState}개의 금융사로부터 ${userInfo?.name}님의`}</b>
                <br />
                대출조건을 받아오고 있어요
            </p>
            <p className="mt-[10px] text-14-regular text-gray-50">
                {progress === 100 ? '완료!' : `${Math.round(progress)}% 확인중${'.'.repeat(dots)}`}
            </p>

            <div className="relative flex flex-col items-center mt-30 h-[300px] justify-center">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="absolute w-[100px] h-[100px] transition-all duration-500 ease-in-out"
                        style={{
                            filter: index === imageCurrentIndex ? 'none' : 'blur(4px)',
                            opacity: index === imageCurrentIndex ? 1 : 0.5,
                            transform: `translateY(${(index - imageCurrentIndex) * 50}px)`,
                        }}
                    >
                        <Image src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageScraping;
