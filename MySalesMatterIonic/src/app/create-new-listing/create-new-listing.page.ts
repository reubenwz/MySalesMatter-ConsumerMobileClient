import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ListingService } from '../services/listing.service';
import { CategoryService } from '../services/category.service';
import { TagService } from '../services/tag.service';
import { Listing } from '../models/listing';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-create-new-listing',
  templateUrl: './create-new-listing.page.html',
  styleUrls: ['./create-new-listing.page.scss'],
})
export class CreateNewListingPage implements OnInit {
  submitted: boolean;
  newListing: Listing;
  categoryId: string;
  tagIds: string[];

  categories: Category[];
  tags: Tag[];

  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  userId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    private categoryService: CategoryService,
    private sessionService: SessionService,
    private tagService: TagService
  ) {
    this.submitted = false;
    this.newListing = new Listing();
    this.newListing.picturePath = '';
    this.newListing.rentalAvailability = true;
    this.newListing.forSaleAvailability = true;
    this.newListing.dateListed = new Date();
    this.newListing.likes = 0;
    this.newListing.name = '';
    this.resultSuccess = false;
    this.resultError = false;
    this.userId = this.sessionService.getCurrentUser().userId;
  }

  ngOnInit() {
    this.categoryService.getLeafCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log('********** CreateNewListingComponent.ts: ' + error);
      }
    );

    this.tagService.getTags().subscribe(
      (response) => {
        this.tags = response;
      },
      (error) => {
        console.log('********** CreateNewListingComponent.ts: ' + error);
      }
    );
  }

  clear() {
    this.submitted = false;
    this.newListing = new Listing();
  }

  create(createListingForm: NgForm) {
    let longTagIds: number[] = new Array();

    if (this.tagIds != null) {
      for (var i = 0; i < this.tagIds.length; i++) {
        longTagIds.push(parseInt(this.tagIds[i]));
      }
    }
    console.log(
      '********** DEBUG CreateNewListingPage.ts brand : ' +
      this.newListing.brand
    );
    this.submitted = true;

    if (createListingForm.valid) {
      this.listingService
        .createNewListing(
          this.newListing,
          parseInt(this.categoryId),
          this.userId,
          longTagIds
        )
        .subscribe(
          (response) => {
            let newListingId: number = response;
            this.resultSuccess = true;
            this.resultError = false;
            this.message =
              'New Listing ' + newListingId + ' created successfully';

            this.newListing = new Listing();
            this.categoryId = '';
            this.tagIds = new Array();
            this.submitted = false;
            createListingForm.reset();
          },
          (error) => {
            this.resultError = true;
            this.resultSuccess = false;
            this.message =
              'An error has occurred while creating the new Listing: ' + error;

            console.log('********** CreateNewListingPage.ts: ' + error);
          }
        );
    }
  }

  back() {
    this.router.navigate(['/index/']);
  }
}
