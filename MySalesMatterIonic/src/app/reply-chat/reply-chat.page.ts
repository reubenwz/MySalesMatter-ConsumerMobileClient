import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../services/message.service';
import { Message } from '../models/message';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-reply-chat',
  templateUrl: './reply-chat.page.html',
  styleUrls: ['./reply-chat.page.scss'],
})
export class ReplyChatPage implements OnInit {
  submitted: boolean;
  newMessage: Message;
  offerId: number;

  resultSuccess: boolean;
  resultError: boolean;
  respondMessage: string;
  senderId: number;
  recipientId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private sessionService: SessionService
  ) {
    this.newMessage = new Message();
  }

  ngOnInit() {
    this.recipientId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('userId')
    );
    this.offerId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('offerId')
    );
    this.senderId = this.sessionService.getCurrentUser().userId;
  }

  clear() {
    this.submitted = false;
    this.newMessage = new Message();
  }

  create(createMessageForm: NgForm) {
    this.submitted = true;
    console.log('reply chat recipientid: ' + this.recipientId);
    console.log('reply chat senderid: ' + this.senderId);
    if (createMessageForm.valid) {
      this.messageService
        .addMessage(this.newMessage, this.recipientId, this.offerId)
        .subscribe(
          (response) => {
            this.newMessage = response;
            this.resultSuccess = true;
            this.resultError = false;
            this.respondMessage = 'Mesage sent!';
            this.newMessage = new Message();
            this.submitted = false;
            createMessageForm.reset();
            console.log('********** response success ');
          },
          (error) => {
            this.resultError = true;
            this.resultSuccess = false;
            this.respondMessage =
              'An error has occurred while sending the message: ' + error;
            console.log('********** response failure ');
          }
        );
    }
  }

}
