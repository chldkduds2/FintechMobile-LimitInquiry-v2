export interface Bank {
    id: number;
    name: string;
    bankLosgoUrl: string;
    backgroundBankLogo: string;
    bankDivisionCode: string;
    bankIntroduction: string;
    displayOrder: number;
    isUnderInspection: boolean;
}

export interface PaymentMethod {
    repayAllAtEnd: {
        bool: boolean;
        months: number[];
    };
    repaySameRateAmount: {
        bool: boolean;
        months: number[];
    };
    repaySameAmount: {
        bool: boolean;
        months: number[];
    };
}

export interface DisplayProperty {
    v1: {
        rateType: string[];
        tag: string[];
        productTag: string[];
        bridge: {
            type: string;
            bridgeImgLink: string;
            bridgeFullImgLink: string;
        };
        informMessage: string;
        businessHour: string;
        paymentMethod: PaymentMethod;
        promotionCode: string;
        bankPhoneNumber: string;
        auditNumber: string;
        auditDate: string;
        auditExpDate: string;
        termsAndCondition: { [key: string]: string }[];
    };
}

export interface Product {
    id: number;
    bank: Bank;
    name: string;
    category: string;
    displayProperty: DisplayProperty;
    majorCategory: string;
    minorCategory: string;
    requiredOpenAccount: boolean;
    redemptionFeeYn: boolean;
    expectedHours: number;
    expectedMins: number;
    productCode: string;
    contractApplyCount: number;
    tags: { type: string; text: string }[];
}

export interface Condition {
    id: number;
    loanLimit: number;
    findaPreferredLoanLimit: number;
    interestType: string;
    loanRate: number;
    baseRate: number;
    findaPreferredLoanRate: number;
    loanPeriod: number;
    repayMethod: string;
    loanReliabilityGrade: string;
}

export interface LoansListDetailResponseType {
    id: number;
    insertTime: number;
    applicationId: number;
    product: Product;
    condition: Condition;
    status: string;
    contractType: string;
    responseMessage: string;
}
