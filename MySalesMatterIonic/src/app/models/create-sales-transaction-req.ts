export class CreateSalesTransactionReq {

    offerId: number | undefined;
    userId: number | undefined;
    transactionDate: Date | undefined;
    totalAmt: number | undefined;
    username: string | undefined;
    password: string | undefined;
    ccName: string | undefined;
    ccNum: string | undefined;
    cvv: string | undefined;
    expiry: string | undefined;



    constructor(username?: string, password?: string, offerId?: number, userId?: number, transactionDate?: Date, totalAmt?: number, ccName?: string, ccNum?: string, cvv?: string, expiry?: string) {
        this.username = username;
        this.password = password;
        this.offerId = offerId;
        this.userId = userId;
        this.transactionDate = transactionDate;
        this.totalAmt = totalAmt;
        this.ccName = ccName;
        this.ccNum = ccNum;
        this.cvv = cvv;
        this.expiry = expiry;
    }
}
