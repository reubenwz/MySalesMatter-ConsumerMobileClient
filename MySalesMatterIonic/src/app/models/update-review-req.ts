export class UpdateReviewReq {

    username: string | undefined;
    password: string | undefined;
    reviewId: number | undefined;
    starRating: number | undefined;
    pictPath: String | undefined;
    desc: String | undefined;

    constructor(username?: string, password?: string, reviewId?: number, starRating?: number, pictPath?: String, desc?: String) {
        this.username = username;
        this.password = password;
        this.reviewId = reviewId;
        this.starRating = starRating;
        this.pictPath = pictPath;
        this.desc = desc;
    }
}
