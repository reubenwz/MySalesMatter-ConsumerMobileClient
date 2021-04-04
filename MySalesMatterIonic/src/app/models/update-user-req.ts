import { User } from "./user";

export class UpdateUserReq {

    userToUpdate: User | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, userToUpdate?: User) {
        this.username = username;
        this.password = password;
        this.userToUpdate = userToUpdate;
    }
}
