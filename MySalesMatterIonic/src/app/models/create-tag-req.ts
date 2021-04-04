import { Tag } from "./tag";

export class CreateTagReq {
    newTag: Tag | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, newTag?: Tag) {
        this.username = username;
        this.password = password;
        this.newTag = newTag;
    }
}
