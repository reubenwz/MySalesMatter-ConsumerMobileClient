import { Component } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	public appPagesLogin = [
		{ title: 'Home', url: '/browseAllListings', icon: 'home' },
		{ title: 'Logout', url: '/login', icon: 'exit' }
	];

	public appPagesLogout = [
		{ title: 'Home', url: '/browseAllListings', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' }
	];

	public appPages = [
		{ title: 'Login', url: '/login', icon: 'lock-closed' },
		{ title: 'Home', url: '/browseAllListings', icon: 'home' },
		{ title: 'Reviews Received', url: '/reviewsReceived', icon: 'arrow-forward' },
		{ title: 'Reviews Witten', url: '/reviewsWritten', icon: 'arrow-forward' }
	];
	constructor() { }
}
