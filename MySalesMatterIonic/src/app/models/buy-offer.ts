import { OfferType } from "../enums/offer-type.enum";
import { Offer } from "./offer";

export class BuyOffer extends Offer {

    constructor(totalPrice?: number, date?: Date, offerType?: OfferType) {
        super(totalPrice, date);
        this.offerType = offerType;
    }
}
