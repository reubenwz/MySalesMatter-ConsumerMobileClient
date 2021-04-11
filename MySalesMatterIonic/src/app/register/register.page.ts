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
  newUser: User;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router,
    public sessionService: SessionService,
    private userService: UserService) {
    this.submitted = false;
    this.newUser = new User();

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
  }

  clear() {
    this.newUser = new User();
    this.submitted = false;
  }

  userRegister(userRegisterForm: NgForm) {
    this.submitted = true;

    console.log(this.newUser.name);

    if (userRegisterForm.valid) {
      this.userService.registerUser(this.newUser).subscribe(
        response => {
          let registeredUser: User = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New user " + registeredUser.userId + " created successfully";

          this.newUser = new User();
          this.submitted = false;
          userRegisterForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new user: " + error;

          console.log('********** RegisterPage.ts: ' + error);
        }
      );

    }

  }

  back() {
    this.router.navigate(["/index"]);
  }
}
