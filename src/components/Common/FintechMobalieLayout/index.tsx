'use client';
import { PropsWithChildren } from 'react';
import Header from '@/components/Common/Header/index';
import useFintechMobalie from '@/hooks/Common/FintechMobalieLayout/useFintechMobalieLayout';
import PageScrollfixedContentContainer from '@/components/Common/PageScrollFixedContentContainer/index';
import useListClickContainer from '@/hooks/Common/Footer/ListClickContainer/ListClickModal/useListClickModal';

const FintechMobalieLayout = ({ children }: PropsWithChildren) => {
    const { scrollRef, position, isModalOpen, pathname, scrollToTop } = useFintechMobalie();
    const { notApprovedLoansDataModalOpenState } = useListClickContainer();

    return (
        <div>
            <Header position={Number(position)} />
            <div className={`flex justify-center contain-conten ${pathname === '/' && position > 260 ? '' : ' mt-10'}`}>
                <div
                    ref={scrollRef}
                    className={`max-w-[427px] h-[100vh] font-sans max-h-screen no-scrollbar ${
                        isModalOpen ? 'overflow-hidden' : 'overflow-y-scroll'
                    }`}
                >
                    {children}
                </div>
            </div>
            <div className={`${position > 100 && !notApprovedLoansDataModalOpenState ? '' : 'hidden'}`}>
                <PageScrollfixedContentContainer pathname={pathname === '/result'} scrollToTop={scrollToTop} />
            </div>
        </div>
    );
};

export default FintechMobalieLayout;
