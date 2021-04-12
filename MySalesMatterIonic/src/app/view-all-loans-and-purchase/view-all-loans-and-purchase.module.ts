import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllLoansAndPurchasePageRoutingModule } from './view-all-loans-and-purchase-routing.module';

import { ViewAllLoansAndPurchasePage } from './view-all-loans-and-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllLoansAndPurchasePageRoutingModule
  ],
  declarations: [ViewAllLoansAndPurchasePage]
})
export class ViewAllLoansAndPurchasePageModule {}
