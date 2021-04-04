import { Review } from "./review";

export class CreateReviewReq {

    reviewerId: number | undefined;
    listingId: number | undefined;
    newReview: Review | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(newReview?: Review, username?: string, password?: string, reviewerId?: number, listingId?: number) {
        this.username = username;
        this.password = password;
        this.newReview = newReview;
        this.reviewerId = reviewerId;
        this.listingId = listingId;
    }
}
