import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyChatPageRoutingModule } from './reply-chat-routing.module';

import { ReplyChatPage } from './reply-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReplyChatPageRoutingModule
  ],
  declarations: [ReplyChatPage]
})
export class ReplyChatPageModule {}
