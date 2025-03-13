import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Schoolcertificate } from 'src/app/modules/schoolcertificate/interfaces/schoolcertificate.interface';
import { SchoolcertificateService } from 'src/app/modules/schoolcertificate/services/schoolcertificate.service';
import { SchoolcourseService } from 'src/app/modules/schoolcourse/services/schoolcourse.service';
import { Schoolsession } from 'src/app/modules/schoolsession/interfaces/schoolsession.interface';
import { UserService } from 'src/app/modules/user/services/user.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'wacom';

@Component({
	selector: 'app-session',
	standalone: false,
	templateUrl: './session.component.html',
	styleUrl: './session.component.scss'
})
export class SessionComponent {
	readonly url = environment.url;

	@Input() session: Schoolsession;

	constructor(
		private _scs: SchoolcertificateService,
		public userService: UserService,
		public scs: SchoolcourseService,
		private _http: HttpService,
		private _router: Router
	) {}

	go(): void {
		this._router.navigateByUrl(
			`/course/${this.session.course}/${this.session._id}`
		);
	}

	buy(): void {
		this._http.post(
			'/api/school/participate',
			{
				session: this.session._id,
				course: this.session.course
			},
			(resp: Schoolcertificate) => {
				if (resp) {
					this._scs.fetch(resp).subscribe(() => {
						this._router.navigateByUrl('/course/' + resp.course);
					});
				}
			}
		);
	}
}
