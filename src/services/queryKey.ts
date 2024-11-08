export const QUERY_KEYS = {
    loanValue: {
        LoansListState: (status: string) => ['LoansListDateState', status],
        LoansListCountState: (LoansFilteringListLength: number) => [
            'LoansListCountDateState',
            LoansFilteringListLength,
        ],
    },
    loginValue: {
        userInfo: ['userInfo'],
    },
};
