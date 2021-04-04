export class UnlikeItemReq {
    listingId: number | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, listingId?: number) {
        this.username = username;
        this.password = password;
        this.listingId = listingId;
    }
}
