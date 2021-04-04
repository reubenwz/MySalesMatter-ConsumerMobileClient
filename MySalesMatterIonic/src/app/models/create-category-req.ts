import { Category } from "./category";

export class CreateCategoryReq {

    parentCategoryId: number | undefined;
    newCategory: Category | undefined;
    username: string | undefined;
    password: string | undefined;



    constructor(username?: string, password?: string, newCategory?: Category, parentCategoryId?: number) {
        this.username = username;
        this.password = password;
        this.newCategory = newCategory;
        this.parentCategoryId = parentCategoryId;
    }
}
