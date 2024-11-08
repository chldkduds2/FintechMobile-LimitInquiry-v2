'use client';
import useAccessDeniedModal from '@/hooks/AccessDeniedModal/useAccessDeniedModal';
import React from 'react';
import ReactDOM from 'react-dom';

const AccessDeniedModal = () => {
    const { modalPortal, handleUserInfoRefetchBtnClick } = useAccessDeniedModal();
    return modalPortal
        ? ReactDOM.createPortal(
              <div className="fixed top-0 bottom-0 left-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-100 bg-gray-50">
                  <div className="pt-18 pr-10 pl-10 text-center w-[90%] overflow-hidden h-[40%]  bg-white shadow-lg overflow-y-auto no-scrollbar transform transition-transform duration-300 rounded-[1.25rem]">
                      <h2 className="text-center whitespace-pre-wrap text-20-bold">
                          로그인되지 않은
                          {'\n'}
                          사용자 정보입니다.
                      </h2>
                      <div className="h-[10px]" />
                      <span className="text-center whitespace-pre-wrap text-15-regular text-gray-70">
                          서비스 사용을 위해
                          {'\n'}
                          다시 로그인해주세요.
                      </span>
                      <button
                          onClick={handleUserInfoRefetchBtnClick}
                          className="hover:active:bg-uniqueGray-99 mt-15 text-sm flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-white border-[1px] border-solid text-white font-bold  w-full text-[17px] lg:text-[17px] h-[60px] lg:h-[52px] rounded-[100px]"
                      >
                          다시 로그인하기
                      </button>
                  </div>
              </div>,
              modalPortal
          )
        : null;
};
export default AccessDeniedModal;
