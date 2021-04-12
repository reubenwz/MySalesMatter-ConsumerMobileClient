import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from '../services/message.service';
import { User } from '../models/user';
import { SessionService } from '../services/session.service';
import { logging } from 'selenium-webdriver';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: Message[];
  userId: number;
  error: boolean;
  errorMessage: string;
  resultSuccess: boolean;
  retriveMessagesError: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private sessionService: SessionService) { 
    this.error = false;
    this.retriveMessagesError = false;
    }

  ngOnInit() {
    this.userId = this.sessionService.getCurrentUser().userId;
    this.refreshChats();
  }

  refreshChats() {
    this.messageService.retrieveReceivedMessagesByUserId(this.userId).subscribe(
			response => {
				this.messages = response;
			},
			error => {
				console.log('********** ViewAllReviewsPage.ts: ' + error);
			}
		);
  }

  replyMessage(event, message) {
    this.router.navigate(["/replyChat/" + message.offer.offerId]);
  }
}

