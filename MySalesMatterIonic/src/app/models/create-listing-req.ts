import { Listing } from "./listing";

export class CreateListingReq {

    categoryId: number | undefined;
    userId: number | undefined;
    username: string | undefined;
    password: string | undefined;
    tagIds: number[] | undefined;
    name: string;
    description: string;
    date: Date;
    brand: string;
    rentalPrice: number;
    salePrice: number;
    location: string;
    picturePath: string;
    rentalAvailability: boolean;
    forSaleAvailability: boolean;



    constructor(rentalAvailability?: boolean, forSaleAvailability?: boolean, picturePath?: string, name?: string, description?: string, brand?: string, rentalPrice?: number, salePrice?: number, location?: string, username?: string, password?: string, userId?: number, categoryId?: number, tagIds?: number[]) {
        this.rentalAvailability = rentalAvailability;
        this.forSaleAvailability = forSaleAvailability;
        this.description = description;
        this.name = name;
        this.date = new Date();
        this.brand = brand;
        this.rentalPrice = rentalPrice;
        this.salePrice = salePrice;
        this.location = location;
        this.username = username;
        this.password = password;
        this.userId = userId;
        this.categoryId = categoryId;
        this.tagIds = tagIds;
        this.picturePath = picturePath;
    }
}
