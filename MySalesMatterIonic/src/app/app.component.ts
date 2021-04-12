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

  public appPagesLogin = [
    { title: 'Logout', url: '/login', icon: 'exit' },
    { title: 'Home', url: '/browseAllListings', icon: 'home' },
    {
      title: 'My Listings',
      url: '/viewMyListings',
      icon: 'arrow-forward',
    },
    {
      title: 'Reviews Received',
      url: '/reviewsReceived',
      icon: 'arrow-forward',
    },
    {
      title: 'All Loans And Purchases',
      url: '/viewAllLoansAndPurchase',
      icon: 'arrow-forward',
    },
    { title: 'Reviews Written', url: '/reviewsWritten', icon: 'arrow-forward' },
  ];
  constructor(public sessionService: SessionService) { }
}
