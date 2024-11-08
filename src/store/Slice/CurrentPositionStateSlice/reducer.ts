'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPositionState } from '@/types/PositionStateType/positionStateType.type';

const currentPositionStateSlice = createSlice({
    name: 'currentPositionState',
    initialState: initialPositionState,
    reducers: {
        setCurrentPositionState: (state, action: PayloadAction<number>) => {
            state.currentPositionState = action.payload;
        },
        resetCurrentPositionState: (state) => {
            state.currentPositionState = 0;
        },
    },
});

export const { setCurrentPositionState, resetCurrentPositionState } = currentPositionStateSlice.actions;

export default currentPositionStateSlice.reducer;
