import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMyLikedItemsPageRoutingModule } from './view-my-liked-items-routing.module';

import { ViewMyLikedItemsPage } from './view-my-liked-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMyLikedItemsPageRoutingModule
  ],
  declarations: [ViewMyLikedItemsPage]
})
export class ViewMyLikedItemsPageModule {}
