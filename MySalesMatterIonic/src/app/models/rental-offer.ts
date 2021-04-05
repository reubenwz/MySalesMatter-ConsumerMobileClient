import { Offer } from "./offer";

export class RentalOffer extends Offer {

    startDate: Date | undefined;
    endDate: Date | undefined;

    constructor(totalPrice?: number, date?: Date, startDate?: Date, endDate?: Date) {
        super(totalPrice, date);
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
