import { Listing } from "./listing";
export class Tag {

    tagId: number | undefined;
    name: string | undefined;

    listingEntities: Listing[] | undefined;



    constructor(name?: string) {
        this.name = name;
    }
}
