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
      icon: 'list'
    },
    {
      title: 'All Loans And Purchases',
      url: '/viewAllLoansAndPurchase',
      icon: 'cash',
    },
  ];
  public appPagesProfile = [
    {
      title: 'My Listings',
      url: '/viewMyListings',
      icon: 'list',
    },
    {
      title: 'My Liked Items',
      url: '/viewMyLikedItems',
      icon: 'heart',
    },
    {
      title: 'My Offers - Transaction History',
      url: '/viewMyOffers',
      icon: 'star',
    }
  ];
  public appPagesReviews = [
    {
      title: 'Reviews Received',
      url: '/reviewsReceived',
      icon: 'folder-open',
    },
    {
      title: 'Reviews Written',
      url: '/reviewsWritten',
      icon: 'pencil'
    },
  ];
  constructor(public sessionService: SessionService) { }
}
