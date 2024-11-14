'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialModalOpenState } from '@/types/ModalOpenStateType/modalOpenState.type';

const modalOpenStateSlice = createSlice({
    name: 'modalOpenStateS',
    initialState: initialModalOpenState,
    reducers: {
        setIsLoansTypeModalOpenState(state, action: PayloadAction<boolean>) {
            state.isLoansTypeModalOpenState = action.payload;
        },
        setNotApprovedLoansDataModalOpenState(state, action: PayloadAction<boolean>) {
            state.notApprovedLoansDataModalOpenState = action.payload;
        },
        setIsLoanCTAmodalOpenState(state, action: PayloadAction<boolean>) {
            state.isLoanCTAmodalOpenState = action.payload;
        },
    },
});

export const { setIsLoansTypeModalOpenState, setNotApprovedLoansDataModalOpenState, setIsLoanCTAmodalOpenState } =
    modalOpenStateSlice.actions;
export default modalOpenStateSlice.reducer;
