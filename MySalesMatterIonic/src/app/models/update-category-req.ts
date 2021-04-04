import { Category } from "./category";

export class UpdateCategoryReq {

    parentCategoryId: number | undefined;
    categoryToUpdate: Category | undefined;
    username: string | undefined;
    password: string | undefined;


    constructor(username?: string, password?: string, categoryToUpdate?: Category, parentCategoryId?: number) {
        this.username = username;
        this.password = password;
        this.categoryToUpdate = categoryToUpdate;
        this.parentCategoryId = parentCategoryId;
    }
}