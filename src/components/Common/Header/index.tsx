'use client';
import { usePathname } from 'next/navigation';
import HeadeArrowIcon from '@/assets/image/headeArrowIcon';
import LoansFilterBar from '../LoansFilterBar';
import { memo } from 'react';

const Header = memo(({ position }: { position: number }) => {
    const pathname = usePathname();

    return (
        <div
            className={`flex flex-col h-full ${
                pathname === '/result' && position > 260 ? 'shadow-[0px_9px_10px_rgba(0,0,0,0.1)]' : ''
            }`}
        >
            <div className="flex h-[2vh] items-center justify-between">
                <button
                    onClick={() => (window.location.href = '/result')}
                    className="h-full w-[55px] flex items-center justify-center mt-10 "
                >
                    <HeadeArrowIcon />
                </button>
            </div>

            <div className={`${pathname === '/result' && position > 260 ? '' : 'hidden'} p-5`}>
                <LoansFilterBar />
            </div>
            <div className={`${position > 100 ? '' : 'hidden'}`}></div>
        </div>
    );
});

Header.displayName = 'Header';

export default Header;
