'use client';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import LoanInfoAccordionItem from './LoanInfoAccordionItem/index';
import useLoanInfo from '@/hooks/Common/LoanInfo/useLoanInfo';
import LoanCTAmodal from '@/components/LoansDetail/LoanInfo/LoanCTAmodal';
import LoanDetailToolTipImage from '@/assets/image/loanDetailTooltip.svg';
import Image from 'next/image';

const LoanInfo = () => {
    const {
        data,
        isAnyOpen,
        openIndexes,
        isLoanCTAmodalOpenState,
        isClickCTAbtn,
        toggleAll,
        toggleOpen,
        handlerloanCTAbtnClick,
    } = useLoanInfo();

    return (
        <div className="w-full">
            <div className="flex items-center justify-between px-5 h-15">
                <h1 className="text-base font-bold text-black">대출 상품 안내</h1>
                <button className="flex items-center justify-center h-11 flex-nowrap" onClick={toggleAll}>
                    <span className="text-xs font-bold text-indigo-40">{isAnyOpen ? '전체닫기' : '전체열기'}</span>
                    <div className="flex items-center justify-center w-4 h-4 text-indigo-40">
                        {isAnyOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </div>
                </button>
            </div>

            <div className="flex justify-center m-auto w-[91%] items-center border-b border-[#c1c2ca]/30"></div>

            <div className="mt-2">
                {data?.map((item, index) => {
                    const termsList = item.product.displayProperty.v1.termsAndCondition;
                    return termsList.map((terms, termsIndex) => {
                        return Object.entries(terms).map(([key, value]) => {
                            const content = value || '';
                            return (
                                <LoanInfoAccordionItem
                                    key={`${index}-${termsIndex}-${key}`}
                                    title={key || '데이터를 불러오는데 실패하였습니다.'}
                                    content={content}
                                    isOpen={openIndexes[index]}
                                    toggleOpen={() => toggleOpen(index)}
                                />
                            );
                        });
                    });
                })}
            </div>

            <div className="fixed bottom-0 left-0 z-50 w-full">
                <div className="px-4 bg-white pb-[max(env(safe-area-inset-bottom),_16px)] relative">
                    <div className="relative flex flex-col gap-2">
                        <div className="z-20 flex justify-center w-full">
                            <Image
                                src={LoanDetailToolTipImage}
                                alt={'LoanDetailToolTipImage Error...'}
                                className="w-full object-contain max-w-[250px] animate-bounce"
                            />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent"></div>

                        <button
                            className="text-base grow flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-indigo-50 border-[1px] border-solid text-white font-bold lg:hover:bg-[#374593] lg:focus:bg-[#374593] lg:hover:border-[#374593] lg:focus:border-[#374593] active:bg-[#374593] active:border-[#374593] disabled:hover:bg-indigo-50 disabled:focus:bg-indigo-50 disabled:active:bg-indigo-50 w-full text-[17px] lg:text-[21px] h-[54px] lg:h-[58px] rounded-[100px] relative z-10"
                            onClick={handlerloanCTAbtnClick}
                        >
                            {isClickCTAbtn ? '이어서 진행하기' : '대출 신청하기'}
                        </button>
                    </div>
                </div>
            </div>

            {isLoanCTAmodalOpenState && <LoanCTAmodal />}
        </div>
    );
};

export default LoanInfo;
