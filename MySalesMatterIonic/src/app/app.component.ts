import { Component } from '@angular/core';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesLogout = [
    { title: 'Login', url: '/login', icon: 'lock-closed' },
    { title: 'Register', url: '/register', icon: 'lock-closed' },
  ];

  public appPagesLoginGeneral = [
    // { title: 'Logout', url: '/login', icon: 'exit' },
    { title: 'Home', url: '/login', icon: 'person' },
    { title: 'Chat', url: '/chat', icon: 'chatbubbles' },
  ];

  public appPagesBuyRent = [
    {
      title: 'Browse All Listings',
      url: '/browseAllListings',
      icon: 'chevron-forward'
    },
    {
      title: 'All Loans And Purchases',
      url: '/viewAllLoansAndPurchase',
      icon: 'chevron-forward',
    },
  ];
  public appPagesProfile = [
    {
      title: 'My Listings',
      url: '/viewMyListings',
      icon: 'chevron-forward',
    },
    {
      title: 'My Liked Items',
      url: '/viewMyLikedItems',
      icon: 'chevron-forward',
    },
    {
      title: 'My Offers - Transaction History',
      url: '/viewMyOffers',
      icon: 'chevron-forward',
    }
  ];
  public appPagesReviews = [
    {
      title: 'Reviews Received',
      url: '/reviewsReceived',
      icon: 'chevron-forward',
    },
    {
      title: 'Reviews Written',
      url: '/reviewsWritten',
      icon: 'chevron-forward'
    },
  ];
  constructor(public sessionService: SessionService) { }
}
