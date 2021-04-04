import { Offer } from "./offer";
import { User } from "./user";

export class SalesTransaction {

    saleTransactionId: number | undefined;
    totalAmt: number | undefined;

    transactionDate: Date | undefined;
    user: User | undefined;

    offer: Offer | undefined;


    constructor(totalAmt?: number, transactionDate?: Date) {
        this.totalAmt = totalAmt;
        this.transactionDate = transactionDate;
    }
}
