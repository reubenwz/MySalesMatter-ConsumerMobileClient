import { Listing } from "./listing";

export class CreateListingReq {

    categoryId: number | undefined;
    userId: number | undefined;
    username: string | undefined;
    password: string | undefined;
    tagIds: number[] | undefined;
    newListing: Listing | undefined;



    constructor(username?: string, password?: string, newListing?: Listing, userId?: number, categoryId?: number, tagIds?: number[]) {
        this.username = username;
        this.password = password;
        this.newListing = newListing;
        this.userId = userId;
        this.categoryId = categoryId;
        this.tagIds = tagIds;
    }
}
