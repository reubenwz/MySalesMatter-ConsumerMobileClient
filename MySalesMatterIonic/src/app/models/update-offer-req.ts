import { Offer } from "./offer";

export class UpdateOfferReq {

    offerToUpdate: Offer | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, offerToUpdate?: Offer) {
        this.username = username;
        this.password = password;
        this.offerToUpdate = offerToUpdate;
    }
}
