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
    { title: 'Logout', url: '/login', icon: 'exit' },
    { title: 'Home', url: '/index', icon: 'home' },
    { title: 'Chat', url: '/chat', icon: 'chatbubbles' },
  ];

  public appPagesBuyRent = [
    {
      title: 'Browse All Listings',
      url: '/browseAllListings',
      icon: 'arrow-forward'
    },
    {
      title: 'All Loans And Purchases',
      url: '/viewAllLoansAndPurchase',
      icon: 'arrow-forward',
    },
  ];
  public appPagesProfile = [
    {
      title: 'My Listings',
      url: '/viewMyListings',
      icon: 'arrow-forward',
    },
    {
      title: 'My Liked Items',
      url: '/viewMyLikedItems',
      icon: 'arrow-forward',
    },
    {
      title: 'My Offers (Transaction History)',
      url: '/viewMyOffers',
      icon: 'arrow-forward',
    }
  ];
  public appPagesReviews = [
    {
      title: 'Reviews Received',
      url: '/reviewsReceived',
      icon: 'arrow-forward',
    },
    {
      title: 'Reviews Written',
      url: '/reviewsWritten',
      icon: 'arrow-forward'
    },
  ];
  constructor(public sessionService: SessionService) { }
}
