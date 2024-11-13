export interface UserLoginStateType {
    version: string;
    token: string;
    userId: number;
    userRole: 'MALE' | 'FEMALE';
    issueTime: string;
    expireTime: string;
    authTxId: string;
}
