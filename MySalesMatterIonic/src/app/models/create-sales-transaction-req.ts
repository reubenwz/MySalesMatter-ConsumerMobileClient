export class CreateSalesTransactionReq {

    offerId: number | undefined;
    userId: number | undefined;
    status: string | undefined;
    transactionDate: Date | undefined;
    totalAmt: number | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, offerId?: number, userId?: number, status?: string, transactionDate?: Date, totalAmt?: number) {
        this.username = username;
        this.password = password;
        this.offerId = offerId;
        this.userId = userId;
        this.status = status;
        this.transactionDate = transactionDate;
        this.totalAmt = totalAmt;
    }
}
