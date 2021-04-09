import { User } from "./user";
import { Offer } from "./offer";

export class Message {

    messageId: number | undefined;
    sentDate: Date | undefined;
    message: String | undefined;
    sender: User | undefined;
    recipient: User | undefined;
    offer: Offer | undefined;

    constructor(sentDate?: Date, message?: String) {
        this.sentDate = sentDate;
        this.message = message;
    }

}