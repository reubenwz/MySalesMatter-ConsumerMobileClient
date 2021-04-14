import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
  }

  register() {
    if (this.sessionService.getCurrentUser() != null) {
      this.router.navigate(['/browseAllListings']);
    } else {
      this.router.navigate(["/register"]);
    }
  }

}
