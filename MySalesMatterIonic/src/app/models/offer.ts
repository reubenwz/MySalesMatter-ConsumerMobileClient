import { SalesTransaction } from "./sales-transaction";
import { Listing } from "./listing";
import { User } from "./user";
import { OfferType } from "../enums/offer-type.enum";

export abstract class Offer {

    offerId: number | undefined;
    accepted: boolean | undefined;
    totalPrice: number | undefined;

    offerDate: Date | undefined;
    offerType: OfferType | undefined;

    salesTransaction: SalesTransaction | undefined;
    listing: Listing | undefined;
    user: User | undefined;


    constructor(totalPrice?: number, offerDate?: Date) {
        this.totalPrice = totalPrice;
        this.offerDate = offerDate;
    }
}
