'use client';
import ReactDOM from 'react-dom';
import useLoanCTAmodal from '@/hooks/Common/LoanInfo/LoanCTAmodal/useLoanCTAmodal';

const LoanCTAmodal = () => {
    const { modalPortal, handlerModalClose } = useLoanCTAmodal();

    return modalPortal
        ? ReactDOM.createPortal(
              <div className="fixed top-0 bottom-0 left-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-100 bg-gray-50">
                  <div className="pt-18 pr-10 pl-10 text-center w-[90%] overflow-hidden h-[35%] bg-white shadow-lg overflow-y-auto no-scrollbar transform transition-transform duration-300 rounded-[1.25rem]">
                      <h2 className="text-center whitespace-pre-wrap text-20-bold">대출신청에 성공하였습니다. 🎉</h2>
                      <div className="h-[10px]" />
                      <span className="text-center whitespace-pre-wrap text-15-regular text-gray-70">
                          축하드립니다!{'\n'}납부일과 금액을 꼼꼼히 확인하세요.
                      </span>
                      <button
                          onClick={handlerModalClose}
                          className="hover:active:bg-uniqueGray-99 mt-10 text-sm flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-white border-[1px] border-solid text-white font-bold w-full text-[17px] lg:text-[17px] h-[60px] lg:h-[52px] rounded-[100px]"
                      >
                          확인
                      </button>
                  </div>
              </div>,
              modalPortal
          )
        : null;
};

export default LoanCTAmodal;
