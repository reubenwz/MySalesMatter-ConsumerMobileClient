import { Injectable } from '@angular/core';

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
}
