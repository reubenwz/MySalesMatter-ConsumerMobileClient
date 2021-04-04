import { User } from "./user";

export class CreateUserReq {
    newUser: User | undefined;

    constructor(newUser?: User) {
        this.newUser = newUser;
    }
}
