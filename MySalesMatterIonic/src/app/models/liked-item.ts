import { Listing } from "./listing";
import { User } from "./user";

export class LikedItem {

    likedItemId: number | undefined;
    listing: Listing | undefined;
    user: User | undefined;



    constructor() {

    }
}
