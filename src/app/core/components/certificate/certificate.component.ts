import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Schoolcertificate } from 'src/app/modules/schoolcertificate/interfaces/schoolcertificate.interface';
import { SchoolcourseService } from 'src/app/modules/schoolcourse/services/schoolcourse.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-certificate',
	standalone: false,
	templateUrl: './certificate.component.html',
	styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
	readonly url = environment.url;

	@Input() certificate: Schoolcertificate;

	@Input() isCourse = true;

	go(): void {
		this._router.navigateByUrl(
			this.isCourse
				? '/course/' + this.certificate.course
				: '/certificate/' + this.certificate._id
		);
	}

	constructor(public scs: SchoolcourseService, private _router: Router) {}
}
