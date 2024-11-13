import Skeleton from '@/components/Common/Skeleton';

const PageScrapingFallbackUI = () => {
    return (
        <div className="mt-5">
            <div className="mb-2">
                <Skeleton width="285px" height="40px" />
            </div>
            <div className="mb-2">
                <Skeleton width="250px" height="40px" />
            </div>
            <Skeleton width="80px" height="30px" />
        </div>
    );
};

export default PageScrapingFallbackUI;
