import { Offer } from "./offer";

export class CreateOfferReq {

    listingId: number | undefined;
    newOffer: Offer | undefined;
    userId: number | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, newOffer?: Offer, userId?: number, listingId?: number) {
        this.username = username;
        this.password = password;
        this.newOffer = newOffer;
        this.userId = userId;
        this.listingId = listingId;
    }
}
