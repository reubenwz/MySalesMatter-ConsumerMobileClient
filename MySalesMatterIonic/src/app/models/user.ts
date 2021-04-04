import { LikedItem } from "./liked-item";
import { Listing } from "./listing";
import { Offer } from "./offer";
import { Review } from "./review";
import { SalesTransaction } from "./sales-transaction";

export class User {

    userId: number | undefined;
    email: string | undefined;
    phoneNumber: string | undefined;
    bankAccountNumber: string | undefined;
    bio: string | undefined;
    username: string | undefined;
    name: string | undefined;
    password: string | undefined;
    picturePath: string | undefined;

    salesTransactions: SalesTransaction[] | undefined;
    listings: Listing[] | undefined;
    likedItems: LikedItem[] | undefined;
    reviews: Review[] | undefined;
    offers: Offer[] | undefined;

    constructor(email?: string, phoneNumber?: string, bankAccountNumber?: string, bio?: string, username?: string, name?: string, password?: string) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.bankAccountNumber = bankAccountNumber;
        this.bio = bio;
        this.username = username;
        this.name = name;
        this.password = password;
    }
}
