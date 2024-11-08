import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
    return (
        <div className="w-full p-4 space-y-4 border border-gray-200 rounded shadow">
            <Skeleton height={150} />
            <Skeleton width={`60%`} height={20} />
            <Skeleton width={`80%`} height={15} />
            <Skeleton width={`50%`} height={15} />
        </div>
    );
};

export default SkeletonLoader;
