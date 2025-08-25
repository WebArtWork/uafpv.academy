import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schoolcertificate } from 'src/app/modules/school/interfaces/schoolcertificate.interface';
import { HttpService } from 'wacom';

@Component({
	selector: 'app-buy',
	standalone: false,
	templateUrl: './buy.component.html',
	styleUrl: './buy.component.scss'
})
export class BuyComponent {
	@Input() courseId: string;

	@Input() sessionId: string;

	@Output() paid = new EventEmitter();

	constructor(private _http: HttpService) {}

	buy(): void {
		this._http
			.post('/api/school/participate', {
				session: this.courseId,
				course: this.sessionId
			})
			.subscribe((certificate: Schoolcertificate) => {
				this.paid.emit(certificate);
			});
	}
}
