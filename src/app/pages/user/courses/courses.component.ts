import { Component } from '@angular/core';
import { forkJoin, from } from 'rxjs';
import { Schoolcertificate } from 'src/app/modules/school/interfaces/schoolcertificate.interface';
import { Schoolsession } from 'src/app/modules/school/interfaces/schoolsession.interface';
import { SchoolcertificateService } from 'src/app/modules/school/services/schoolcertificate.service';
import { SchoolsessionService } from 'src/app/modules/school/services/schoolsession.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CoreService } from 'wacom';

@Component({
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
	standalone: false
})
export class CoursesComponent {
	isMenuOpen = false;

	sessions: Schoolsession[] = [];

	certificates: Schoolcertificate[] = [];

	constructor(
		private _sss: SchoolsessionService,
		private _scs: SchoolcertificateService,
		public userService: UserService,
		private _core: CoreService
	) {
		forkJoin([
			from(
				this._sss.get(
					{},
					{
						name: 'public',
						callback: (sessions): void => {
							this.sessions = sessions as Schoolsession[];
						}
					}
				)
			),
			from(this._core.onComplete('schoolcertificate_loaded'))
		]).subscribe(() => {
			this.certificates =
				this._scs.schoolcertificatesByAuthorstatus[
					this.userService.user._id + 'Pending'
				] || [];

			const ids = this.certificates.map((c) => c.course);

			this.sessions = this.sessions.filter(
				(s) => !ids.includes(s.course)
			);
		});
	}

	back(): void {
		window.history.back();
	}
}
