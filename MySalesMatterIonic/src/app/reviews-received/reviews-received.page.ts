import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { logging } from 'selenium-webdriver';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-reviews-received',
  templateUrl: './reviews-received.page.html',
  styleUrls: ['./reviews-received.page.scss'],
})
export class ReviewsReceivedPage implements OnInit {

  reviews: Review[];
  listings: Listing[];
  userId: number;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  retriveReviewsError: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService,
    private userService: UserService,
    private listingService: ListingService) { 
    this.error = false;
    this.retriveReviewsError = false;
    }

  ngOnInit() {
    this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('userId'));
    this.refreshReviews();
  }

  ionViewWillEnter() {
    this.refreshReviews();
	}

  refreshReviews(){
    this.userService.getUserById(this.userId).subscribe(
			response => {
				this.listings = response.listings;
        this.listings.forEach(x => {
          x.reviews.forEach(y => {
            this.reviews.push(y);
          });          
        });
			},
			error => {
				console.log('********** ViewAllReviewsPage.ts: ' + error);
			}
		);
  }
}
