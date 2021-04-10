import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {


	public appPagesLogout = [
		{ title: 'Login', url: '/login', icon: 'lock-closed' }
	];

	public appPagesLogin = [
		{ title: 'Logout', url: '/login', icon: 'exit' },
		{ title: 'Home', url: '/browseAllListings', icon: 'home' },
		{ title: 'Reviews Received', url: '/reviewsReceived', icon: 'arrow-forward' },
		{ title: 'Reviews Witten', url: '/reviewsWritten', icon: 'arrow-forward' }
	];
	constructor() { }
}
