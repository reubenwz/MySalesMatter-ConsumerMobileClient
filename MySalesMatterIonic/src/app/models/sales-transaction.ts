import { Offer } from "./offer";
import { User } from "./user";

export class SalesTransaction {

    saleTransactionId: number | undefined;
    totalAmt: number | undefined;
    ccName: string | undefined;
    ccNum: string | undefined;
    cvv: string | undefined;
    expiry: string | undefined;

    transactionDate: Date | undefined;
    user: User | undefined;

    offer: Offer | undefined;


    constructor(totalAmt?: number, transactionDate?: Date, ccName?: string, ccNum?: string, cvv?: string, expiry?: string) {
        this.totalAmt = totalAmt;
        this.transactionDate = transactionDate;
        this.ccName = ccName;
        this.ccNum = ccNum;
        this.cvv = cvv;
        this.expiry = expiry;
    }
}
