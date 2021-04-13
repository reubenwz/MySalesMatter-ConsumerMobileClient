import { Review } from "./review";

export class CreateReviewReq {

    reviewerId: number | undefined;
    listingId: number | undefined;
    description: string | undefined;
    starRating: number | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(description?: string, starRating?: number, username?: string, password?: string, reviewerId?: number, listingId?: number) {
        this.username = username;
        this.password = password;
        this.description = description;
        this.starRating = starRating;
        this.reviewerId = reviewerId;
        this.listingId = listingId;
    }
}
