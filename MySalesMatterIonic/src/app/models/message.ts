import { User } from "./user";
import { Offer } from "./offer";

export class Message {

    messageId: number | undefined;
    sentDate: Date | undefined;
    message: string | undefined;
    sender: User | undefined;
    recipient: User | undefined;
    offer: Offer | undefined;

    constructor(sentDate?: Date, message?: string) {
        this.sentDate = sentDate;
        this.message = message;
    }

}