import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LikedItem } from '../models/liked-item';
import { LikedItemService } from '../services/liked-item.service';

@Component({
  selector: 'app-view-my-liked-items',
  templateUrl: './view-my-liked-items.page.html',
  styleUrls: ['./view-my-liked-items.page.scss'],
})
export class ViewMyLikedItemsPage implements OnInit {

  likedItems: LikedItem[];

  constructor(private router: Router, private likedItemService: LikedItemService) { }

  ngOnInit() {
    this.refreshLikedItems();
  }



  ionViewWillEnter() {
    this.refreshLikedItems();
  }



  viewListingDetails(event, likedItem) {
    this.router.navigate(["/viewListingDetails/" + likedItem.listing.listingId]);
  }

  refreshLikedItems() {
    this.likedItemService.getLikedItems().subscribe(
      response => {
        this.likedItems = response;
      },
      error => {
        console.log('********** ViewMyLikedItemsPage.ts: ' + error);
      }
    );
  }

}
