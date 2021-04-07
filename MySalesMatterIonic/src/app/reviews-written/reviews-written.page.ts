import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Review } from '../models/review';
import { ReviewService } from '../services/review.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-reviews-written',
  templateUrl: './reviews-written.page.html',
  styleUrls: ['./reviews-written.page.scss'],
})
export class ReviewsWrittenPage implements OnInit {

  reviews: Review[] | null;
  userId: number;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  retriveReviewsError: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService,
    private userService: UserService) { 
    this.error = false;
    this.retriveReviewsError = false;
    }

  ngOnInit() {
    this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('userId'));
    this.updateModel();
  }

  ionViewWillEnter() {
    this.updateModel();
	}

  updateModel(){
    // this.reviewService.getReviewByUserId(this.userId).subscribe(
		// 	response => {
		// 		this.reviews = response;
		// 	},
		// 	error => {
		// 		console.log('********** ViewAllReviewsPage.ts: ' + error);
		// 	}
		// );
  }
}
