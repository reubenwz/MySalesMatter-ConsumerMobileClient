import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'browseAllListings',
    loadChildren: () =>
      import('./browse-all-listings/browse-all-listings.module').then(
        (m) => m.BrowseAllListingsPageModule
      ),
  },
  {
    path: 'reviewsWritten',
    loadChildren: () =>
      import('./reviews-written/reviews-written.module').then(
        (m) => m.ReviewsWrittenPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'reviewsReceived',
    loadChildren: () =>
      import('./reviews-received/reviews-received.module').then(
        (m) => m.ReviewsReceivedPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'access-right-error',
    loadChildren: () =>
      import('./access-right-error/access-right-error.module').then(
        (m) => m.AccessRightErrorPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'view-listing-details',
    loadChildren: () =>
      import('./view-listing-details/view-listing-details.module').then(
        (m) => m.ViewListingDetailsPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'create-rental-offer',
    loadChildren: () =>
      import('./create-rental-offer/create-rental-offer.module').then(
        (m) => m.CreateRentalOfferPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'create-buy-offer',
    loadChildren: () =>
      import('./create-buy-offer/create-buy-offer.module').then(
        (m) => m.CreateBuyOfferPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'view-my-listings',
    loadChildren: () =>
      import('./view-my-listings/view-my-listings.module').then(
        (m) => m.ViewMyListingsPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'view-my-liked-items',
    loadChildren: () =>
      import('./view-my-liked-items/view-my-liked-items.module').then(
        (m) => m.ViewMyLikedItemsPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'view-my-offers',
    loadChildren: () =>
      import('./view-my-offers/view-my-offers.module').then(
        (m) => m.ViewMyOffersPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'view-listing-offers',
    loadChildren: () =>
      import('./view-listing-offers/view-listing-offers.module').then(
        (m) => m.ViewListingOffersPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'delete-listing',
    loadChildren: () =>
      import('./delete-listing/delete-listing.module').then(
        (m) => m.DeleteListingPageModule
      ),
  },
  {
    path: 'update-listing',
    loadChildren: () =>
      import('./update-listing/update-listing.module').then(
        (m) => m.UpdateListingPageModule
      ),
  },
  {
    path: 'view-all-reviews',
    loadChildren: () =>
      import('./view-all-reviews/view-all-reviews.module').then(
        (m) => m.ViewAllReviewsPageModule
      ),
  },
  {
    path: 'view-review-details',
    loadChildren: () =>
      import('./view-review-details/view-review-details.module').then(
        (m) => m.ViewReviewDetailsPageModule
      ),
  },
  {
    path: 'createNewListing',
    loadChildren: () =>
      import('./create-new-listing/create-new-listing.module').then(m => m.CreateNewListingPageModule),
      canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
