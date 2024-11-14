'use client';
import { TbArrowsSort } from 'react-icons/tb';
import useLoanListHeader from '@/hooks/Common/LoansListContainer/LoansListHeader/useLoansListHeader';
import useLoansFilteringListCountState from '@/services/LoansFilteringListCountStateRepository/queries';

const LoansListHeader = () => {
    const { loansFilteringListCountState } = useLoansFilteringListCountState();
    const { toggleSort, isRateSortState } = useLoanListHeader();

    return (
        <div className="flex mb-[30px] mt-7">
            <div className="flex text-sm font-bold">
                대출가능
                <span className={`ml-1 ${loansFilteringListCountState !== 0 ? 'text-indigo-60' : 'text-[#9FA0AD]'}`}>
                    {loansFilteringListCountState}건
                </span>
            </div>
            <button className="flex ml-auto mr-[5px] cursor-pointer text-xs text-uniqueGray-40" onClick={toggleSort}>
                <TbArrowsSort size={15} className="mr-1" />
                {isRateSortState ? '금리 낮은순' : '한도 높은순'}
            </button>
        </div>
    );
};
export default LoansListHeader;
