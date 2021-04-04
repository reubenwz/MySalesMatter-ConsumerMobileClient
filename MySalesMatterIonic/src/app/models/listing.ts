import { Category } from "./category";
import { Tag } from "./tag";
import { Review } from "./review";
import { Offer } from "./offer";
import { User } from "./user";

export class Listing {

    categoryId: number | undefined;
    name: string | undefined;
    description: string | undefined;
    dateListed: Date | undefined;
    brand: string | undefined;
    likes: number | undefined;
    rentalPrice: number | undefined;
    salePrice: number | undefined;
    location: string | undefined;
    rentalAvailability: boolean | undefined;
    forSaleAvailability: boolean | undefined;
    picturePath: string | undefined;


    category: Category | undefined;
    tags: Tag[] | undefined;
    reviews: Review[] | undefined;
    offers: Offer[] | undefined;
    user: User | undefined;

    constructor(name?: string, description?: string, dateListed?: Date, brand?: string, rentalPrice?: number, salePrice?: number, location?: string, rentalAvailability?: boolean, forSaleAvailability?: boolean, picturePath?: string) {
        this.name = name;
        this.description = description;
        this.dateListed = dateListed;
        this.brand = brand;
        this.rentalPrice = rentalPrice;
        this.salePrice = salePrice;
        this.location = location;
        this.rentalAvailability = rentalAvailability;
        this.forSaleAvailability = forSaleAvailability;
        this.picturePath = picturePath;
    }
}
