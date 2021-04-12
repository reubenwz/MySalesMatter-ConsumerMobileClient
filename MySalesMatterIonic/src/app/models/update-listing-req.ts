import { logging } from 'selenium-webdriver';
import { Listing } from './listing';

export class UpdateListingReq {
  categoryId: number | undefined;
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
  listingId: number;

  constructor(
    username?: string,
    password?: string,
    categoryId?: number,
    tagIds?: number[],
    name?: string,
    description?: string,
    brand?: string,
    rentalPrice?: number,
    salePrice?: number,
    location?: string,
    listingId?: number
  ) {
    this.username = username;
    this.password = password;
    this.categoryId = categoryId;
    this.tagIds = tagIds;
    this.brand = brand;
    this.rentalPrice = rentalPrice;
    this.salePrice = salePrice;
    this.location = location;
    this.username = username;
    this.password = password;
    this.description = description;
    this.name = name;
    this.listingId = listingId;
  }
}
