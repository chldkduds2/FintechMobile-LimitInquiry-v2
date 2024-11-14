export const QUERY_KEYS = {
    loanValue: {
        LoansListState: (status: string | null) => ['LoansListDateState', status],
        LoansListDetailState: ['LoansListDetailState'],
        LoansFilteringListCountState: (LoansFilteringListLength: number) => [
            'LoansFilteringListCountState',
            LoansFilteringListLength,
        ],
    },
    loginValue: {
        loginToken: ['loginToken'],
        userInfo: ['userInfo'],
    },
    loanDetailValue: {
        LoanProgress: (loanId: number) => ['LoanProgress', loanId],
    },
};
