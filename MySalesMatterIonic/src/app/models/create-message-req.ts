export class CreateMessageReq {

    username: string | undefined;
    password: string | undefined;
    message: string | undefined;
    offerId: number | undefined;
    senderId: number | undefined;
    date: Date | undefined;

    constructor(username?: string, password?: string, message?: string, offerId?: number, senderId?: number, date?: Date) {
        this.date = date;
        this.username = username;
        this.password = password;
        this.offerId = offerId;
        this.senderId = senderId;
        this.message = message;
    } 
}
