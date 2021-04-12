import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReplyChatPage } from './reply-chat.page';

const routes: Routes = [
  {
    path: '',
    component: ReplyChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyChatPageRoutingModule {}
