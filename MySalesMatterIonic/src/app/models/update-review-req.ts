import { Review } from "./review";

export class UpdateReviewReq {

    reviewToUpdate: Review | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, reviewToUpdate?: Review) {
        this.username = username;
        this.password = password;
        this.reviewToUpdate = reviewToUpdate;
    }
}
