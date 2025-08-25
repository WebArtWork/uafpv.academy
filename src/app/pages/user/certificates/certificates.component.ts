import { Component } from '@angular/core';
import { Schoolcertificate } from 'src/app/modules/school/interfaces/schoolcertificate.interface';
import { SchoolcertificateService } from 'src/app/modules/school/services/schoolcertificate.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CoreService } from 'wacom';

@Component({
	templateUrl: './certificates.component.html',
	styleUrls: ['./certificates.component.scss'],
	standalone: false
})
export class CertificatesComponent {
	isMenuOpen = false;

	certificates: Schoolcertificate[] = [];

	constructor(
		private _scs: SchoolcertificateService,
		public userService: UserService,
		private _core: CoreService
	) {
		this._core.onComplete('schoolcertificate_loaded').then(() => {
			this.certificates =
				this._scs.schoolcertificatesByAuthorstatus[
					this.userService.user._id + 'Received'
				];
		});
	}

	back(): void {
		window.history.back();
	}
}
