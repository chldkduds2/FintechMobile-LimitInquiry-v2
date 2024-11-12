import { LoansListDetailResponseType } from '@/types/LoansListDetailType/loansListDetail.type';

const baseUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL;

class LoansListDetailDateAPI {
    public async getLoansListDetailDateAPI(): Promise<LoansListDetailResponseType[]> {
        try {
            if (!baseUrl) {
                throw new Error('API URL is not defined in environment variables');
            }

            const response = await fetch(`${baseUrl}/api/Data/LimitInquiryResponse_DetailedDummyData`);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const data = await response.json();

            console.log('API Response Data:', data);

            if (data) {
                return [data] as LoansListDetailResponseType[];
            } else {
                throw new Error('No data available in the response.');
            }
        } catch (error) {
            console.error('Error fetching loan list data:', error);
            throw error;
        }
    }
}

export default new LoansListDetailDateAPI();
