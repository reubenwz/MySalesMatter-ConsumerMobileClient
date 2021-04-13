import { OfferType } from "../enums/offer-type.enum";

export class CreateOfferReq {

    listingId: number | undefined;
    totalPrice: number | undefined;
    offerDate: Date | undefined;
    offerType: number | undefined;
    startDate: Date | null;
    endDate: Date | null;
    userId: number | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, totalPrice?: number, offerDate?: Date, offerType?: number, startDate?: Date, endDate?: Date, listingId?: number, userId?: number) {
        this.username = username;
        this.password = password;
        this.totalPrice = totalPrice;
        this.offerDate = offerDate;
        this.offerType = offerType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userId = userId;
        this.listingId = listingId;
    }
}
