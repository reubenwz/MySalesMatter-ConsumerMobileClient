import { User } from "./user";

export class CreateUserReq {
    email: string;
    phoneNumber: string;
    bankAccountNumber: string;
    bio : string;
    username : string;
    name : string;
    password : string;

    constructor(email?: string, phoneNumber?: string, bankAccountNumber?: string, bio?: string, username?: string, name?: string, password?: string) {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.bio = bio;
        this.bankAccountNumber = bankAccountNumber;
        this.name = name;
        this.username = username;

    }
}
