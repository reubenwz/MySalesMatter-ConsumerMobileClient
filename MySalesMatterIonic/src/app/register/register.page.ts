import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  submitted: boolean;
  name: string;
  username: string;
	email: string;
	password: string;
  phone_number: string;
  bank_account_number: string;
  bio: string;

  constructor(private router: Router,
    public sessionService: SessionService,
		private userService: UserService) {
      this.submitted = false;
    }

  ngOnInit() {
  }

  clear() {
    this.name = ""
    this.username = ""
    this.email = ""
    this.password = ""
    this.phone_number = ""
    this.bank_account_number = ""
    this.bio = ""
  }

  userRegister(userRegisterForm: NgForm){
    this.submitted = true;

    if (userRegisterForm.valid) {
      this.sessionService.setName(this.name);
      this.sessionService.setUsername(this.username);
			this.sessionService.setEmail(this.email);
			this.sessionService.setPassword(this.password);
      this.sessionService.setPhoneNumber(this.phone_number);
      this.sessionService.setBankAccountNum(this.bank_account_number);
      this.sessionService.setBio(this.bio);
    }
    else {

    }
  }

  back() {
    this.router.navigate(["/index"]);
  }
}
