import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseAllListingsPageRoutingModule } from './browse-all-listings-routing.module';

import { BrowseAllListingsPage } from './browse-all-listings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseAllListingsPageRoutingModule
  ],
  declarations: [BrowseAllListingsPage]
})
export class BrowseAllListingsPageModule {}
