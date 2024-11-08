'use client';
import { RootState } from '@/store';

// 1. 페이지 스크롤 Y 위치 값 상태
export const selectCurrentPositionState = (state: RootState) => state.currentPositionState.currentPositionState;

// 2. 사용자가 선택한 필터링바 속성 상태
export const selectLoansFilterBarState = (state: RootState) => state.loansFilterBarState.loansFilterBarState || [];

// 3. 모달 오픈 상태
// 3-1. 대출상품 종류 필터 모달 오픈 상태
export const selectIsLoansTypeModalOpenState = (state: RootState) => state.modalOpenState.isLoansTypeModalOpenState;

// 3-2. 승인 거절/오류 대출상품 리스트 모달 오픈 상태
export const selectNotApprovedLoansDataModalOpenState = (state: RootState) =>
    state.modalOpenState.notApprovedLoansDataModalOpenState;

// 4. 사용자가 선택한 대출상품 종류 필터 모달 속성 상태
export const selectLoansTypeFilterBarState = (state: RootState) =>
    state.loansTypeFilterModalState.loansTypeFilterModalState || [];

// 5. 대출상품 리스트 정렬 상태
export const selectLoansListSortState = (state: RootState) => state.loansListSortState.isRateSortState;
