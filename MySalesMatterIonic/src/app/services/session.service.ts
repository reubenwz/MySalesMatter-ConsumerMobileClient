import { Injectable } from '@angular/core';

import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {

  }


  getIsLogin(): boolean {
    if (sessionStorage.isLogin == "true") {
      return true;
    }
    else {
      return false;
    }
  }



  setIsLogin(isLogin: boolean): void {
    sessionStorage.isLogin = isLogin;
  }

  getCurrentUser(): User {
    return JSON.parse(sessionStorage.currentUser);
  }

  setCurrentUser(currentUser: User | null): void
	{
		sessionStorage.currentUser = JSON.stringify(currentUser);
	}

  setLogout(): void {
    sessionStorage.isLogin = false;
  }

  getEmail(): string {
    return sessionStorage.email;
  }



  setEmail(email: string | undefined): void {
    sessionStorage.email = email;
  }



  getPassword(): string {
    return sessionStorage.password;
  }



  setPassword(password: string | undefined): void {
    sessionStorage.password = password;
  }

  getUsername(): string {
    return sessionStorage.username;
  }

  setUsername(username : string | undefined): void {
    sessionStorage.username = username;
  }

  getName() : string {
    return sessionStorage.name;
  }

  setName(name : string | undefined) : void {
    sessionStorage.name = name;
  }

  getPhoneNumber() : string {
    return sessionStorage.phoneNumber;
  }

  setPhoneNumber(phoneNumber : string | undefined) : void {
    sessionStorage.phoneNumber = phoneNumber;
  }

  getBankAccountNum() : string {
    return sessionStorage.bankAccountNum;
  }

  setBankAccountNum(bankAccountNum: string | undefined) : void {
    sessionStorage.bankAccountNum = bankAccountNum;
  }

  getBio() : string {
    return sessionStorage.bio;
  }

  setBio(bio : string | undefined) : void {
    sessionStorage.bio = bio;
  }

}
