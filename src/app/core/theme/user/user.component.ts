import { UserService } from 'src/app/modules/user/services/user.service';
import { coreAnimation } from '../../animations/core.animations';
import { environment } from 'src/environments/environment';
import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [coreAnimation],
	standalone: false
})
export class UserComponent {
	readonly url = environment.url;

	forceAvatarUrl = '';

	showSidebar = false;

	schoolLinks = [
		{
			icon: 'school',
			page: 'Schools',
			url: 'schools'
		},
		{
			icon: 'menu_book',
			page: 'Courses',
			url: 'courses'
		},
		{
			icon: 'event',
			page: 'Sessions',
			url: 'sessions'
		},
		{
			icon: 'work',
			page: 'Lessons',
			url: 'lessons'
		},
		{
			icon: 'assignment',
			page: 'Tests',
			url: 'tests'
		},
		{
			icon: 'card_membership',
			page: 'Certificates',
			url: 'certificates'
		},
		{
			icon: 'inventory',
			page: 'Products',
			url: 'products'
		},
		{
			icon: 'dashboard',
			page: 'Dashboard',
			url: 'dashboard'
		}
	];

	hideSidebar(): void {
		if (!this._platform.ANDROID && !this._platform.IOS) {
			this.showSidebar = false;
		}
	}

	constructor(public us: UserService, private _platform: Platform) {}
}
