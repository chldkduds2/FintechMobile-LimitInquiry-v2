'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialLoansTypeFilterModalState } from '@/types/LoansListDateType/LoanFilterBarType/LoansTypeFilterModalType/loansTypeFilterModal.type';

const loansTypeFilterModalStateSlice = createSlice({
    name: 'loansTypeFilterModalState',
    initialState: initialLoansTypeFilterModalState,
    reducers: {
        addLoansTypeFilter: (state, action: PayloadAction<string>) => {
            state.loansTypeFilterModalState.push(action.payload);
        },
        removeLoansTypeFilter: (state, action: PayloadAction<string>) => {
            state.loansTypeFilterModalState = state.loansTypeFilterModalState.filter(
                (loanType) => loanType !== action.payload
            );
        },
        resetLoansTypeFilter: (state) => {
            state.loansTypeFilterModalState = [];
        },
    },
});

export const { addLoansTypeFilter, removeLoansTypeFilter, resetLoansTypeFilter } =
    loansTypeFilterModalStateSlice.actions;
export default loansTypeFilterModalStateSlice.reducer;
