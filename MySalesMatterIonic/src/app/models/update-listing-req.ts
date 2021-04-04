import { Listing } from "./listing";

export class UpdateListingReq {

    categoryId: number | undefined;
    username: string | undefined;
    password: string | undefined;
    tagIds: number[] | undefined;
    listingToUpdate: Listing | undefined;



    constructor(username?: string, password?: string, listingToUpdate?: Listing, categoryId?: number, tagIds?: number[]) {
        this.username = username;
        this.password = password;
        this.listingToUpdate = listingToUpdate;
        this.categoryId = categoryId;
        this.tagIds = tagIds;
    }
}
