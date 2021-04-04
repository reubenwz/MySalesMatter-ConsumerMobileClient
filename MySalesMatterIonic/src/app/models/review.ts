import { User } from "./user";
import { Listing } from "./listing";

export class Review {

    reviewId: number | undefined;
    starRating: number | undefined;
    description: string | undefined;

    reviewer: User | undefined;
    listing: Listing | undefined;

    picturePaths: string[] | undefined;



    constructor(starRating?: number, description?: string, picturePaths?: string[]) {
        this.starRating = starRating;
        this.description = description;
        this.picturePaths = picturePaths;
    }
}
