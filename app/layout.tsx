import RootPage from './rootPage';

export const metadata = {
    title: '대출비교 플랫폼, 핀다',
    description: '금융 한도조회를 위한 플랫폼 Fintech Mobile Limit Inquiry 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" />
            <body>
                <RootPage>{children}</RootPage>
                <div id="modal-portal"></div>
            </body>
        </html>
    );
}
