import { Tag } from "./tag";

export class UpdateTagReq {

    tagToUpdate: Tag | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, tagToUpdate?: Tag) {
        this.username = username;
        this.password = password;
        this.tagToUpdate = tagToUpdate;
    }
}
