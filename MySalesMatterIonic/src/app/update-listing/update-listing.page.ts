import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ListingService } from '../services/listing.service';
import { CategoryService } from '../services/category.service';
import { TagService } from '../services/tag.service';
import { Listing } from '../models/listing';
import { Category } from '../models/category';
import { Tag } from '../models/tag';
@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.page.html',
  styleUrls: ['./update-listing.page.scss'],
})
export class UpdateListingPage implements OnInit {
  submitted: boolean;
  listingId: number;
  listingToUpdate: Listing;
  retrieveListingError: boolean;
  userId: number;

  categoryId: string;
  tagIds: string[];

  categories: Category[];
  tags: Tag[];

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    private categoryService: CategoryService,
    private tagService: TagService
  ) {
    this.submitted = false;
    this.retrieveListingError = false;

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.listingId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('listingId')
    );

    this.listingService.getListingByListingId(this.listingId).subscribe(
      (response) => {
        this.listingToUpdate = response;
        this.categoryId = this.listingToUpdate.category.categoryId.toString();

        this.tagIds = new Array();

        for (var i = 0; i < this.listingToUpdate.tags.length; i++) {
          this.tagIds.push(this.listingToUpdate.tags[i].tagId.toString());
        }
      },
      (error) => {
        this.retrieveListingError = true;
        console.log('********** UpdateListingPage.ts: ' + error);
      }
    );

    this.categoryService.getLeafCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log('********** UpdateListingPage.ts: ' + error);
      }
    );

    this.tagService.getTags().subscribe(
      (response) => {
        this.tags = response;
      },
      (error) => {
        console.log('********** UpdateListingPage.ts: ' + error);
      }
    );
  }

  update(updateListingForm: NgForm) {
    let longTagIds: number[] = new Array();

    for (var i = 0; i < this.tagIds.length; i++) {
      longTagIds.push(parseInt(this.tagIds[i]));
    }

    this.submitted = true;

    if (updateListingForm.valid) {
      this.listingService
        .updateListing(
          this.listingToUpdate,
          parseInt(this.categoryId),
          longTagIds
        )
        .subscribe(
          (response) => {
            this.resultSuccess = true;
            this.resultError = false;
            this.message = 'Listing updated successfully';
          },
          (error) => {
            this.resultError = true;
            this.resultSuccess = false;
            this.message =
              'An error has occurred while updating the Listing: ' + error;

            console.log('********** UpdateListingComponent.ts: ' + error);
          }
        );
    }
  }

  back() {
    this.router.navigate(['/viewMyListings/']);
  }
}
