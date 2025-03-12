import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
	templateUrl: './certificate.component.html',
	styleUrls: ['./certificate.component.scss'],
	standalone: false,
})
export class CertificateComponent {
	isMenuOpen = false;

	constructor(public userService: UserService) {}

	back(): void {
		window.history.back();
	}
}
