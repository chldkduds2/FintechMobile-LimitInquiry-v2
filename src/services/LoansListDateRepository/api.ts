import { LoansApply } from '@/types/LoansListDateType/loansListDate.type';

class LoansListDateApi {
    public async getLoanListDateAPI(): Promise<LoansApply[]> {
        try {
            const response = await fetch('/api/Data/LimitInquiryResponse_ExampleDummyData');

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const data = await response.json();

            if (data?.loanApplies) {
                return data.loanApplies as LoansApply[];
            } else {
                throw new Error('데이터 형식이 잘못되었습니다.');
            }
        } catch (error) {
            console.error('Error fetching loan list data:', error);
            throw error;
        }
    }
}

const loansListDateApi = new LoansListDateApi();
export default loansListDateApi;
