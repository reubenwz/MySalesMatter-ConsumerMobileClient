import { Listing } from './listing';

export class Category {

    categoryId: number | undefined;
    name: string | undefined;
    description: string | undefined;

    subCategoryEntities: Category[] | undefined;
    parentCategoryEntity: Category | undefined;

    listingEntities: Listing[] | undefined;



    constructor(name?: string, description?: string) {
        this.name = name;
        this.description = description;
    }
}
