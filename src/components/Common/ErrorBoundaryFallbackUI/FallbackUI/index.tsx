interface FallbackUIProps {
    EventHandler: () => void;
    errorMessage: string;
}

const FallbackUI = ({ EventHandler, errorMessage }: FallbackUIProps) => {
    return (
        <div className="fixed top-0 bottom-0 left-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-100 bg-gray-50">
            <div className="pt-18 pb-10 pr-10 pl-10 text-center w-[90%] overflow-hidden h-auto bg-white shadow-lg overflow-y-auto no-scrollbar transform transition-transform duration-300 rounded-[1.25rem]">
                <h2 className="text-center whitespace-pre-wrap text-20-bold">시스템 오류가 발생했습니다.</h2>
                <div className="h-[10px]" />
                <span className="text-center whitespace-pre-wrap text-15-regular text-gray-70">
                    오류 메시지:{' '}
                    {`${
                        errorMessage === 'AxiosError: Request failed with status code 401'
                            ? '사용자 로그인 정보가 알맞지 않습니다.'
                            : errorMessage
                    }`}
                </span>
                <div className="h-[20px]" />
                <button
                    onClick={EventHandler}
                    className="hover:active:bg-uniqueGray-99 mt-10 text-sm flex items-center justify-center cursor-pointer transition-colors duration-100 ease-linear outline-none disabled:cursor-not-allowed bg-indigo-50 border-white border-[1px] border-solid text-white font-bold w-full text-[17px] lg:text-[17px] h-[60px] lg:h-[52px] rounded-[100px]"
                >
                    다시 시도하기
                </button>
            </div>
        </div>
    );
};

export default FallbackUI;
