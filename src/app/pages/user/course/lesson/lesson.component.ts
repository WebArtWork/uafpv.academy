import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Value } from 'src/app/core/modules/input/input.component';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { Schoolcertificate } from 'src/app/modules/schoolcertificate/interfaces/schoolcertificate.interface';
import { Schoollesson } from 'src/app/modules/schoollesson/interfaces/schoollesson.interface';
import {
	Schooltest,
	Schooltestquestion
} from 'src/app/modules/schooltest/interfaces/schooltest.interface';
import { AlertService, CoreService, HttpService } from 'wacom';

@Component({
	selector: 'app-lesson',
	templateUrl: './lesson.component.html',
	styleUrl: './lesson.component.scss',
	standalone: false
})
export class LessonComponent {
	@Input() lesson: Schoollesson;

	@Input() certificate: Schoolcertificate;

	@Input() tests: Schooltest[] = [];

	@Output() nextLesson = new EventEmitter();

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _http: HttpService,
		private _core: CoreService
	) {}

	setCheckboxes(question: Schooltestquestion, value: Value): void {
		question.checkboxes = question.checkboxes || [];

		question.checkboxes = value as string[];
	}

	answer(test: Schooltest): void {
		this._http
			.post('/api/school/test/answer', {
				certificate: this.certificate,
				test
			})
			.subscribe((resp: Schoolcertificate) => {
				if (resp) {
					this._core.copy(resp, this.certificate);

					this.nextLesson.emit();
				} else {
					this._alert.warning({
						text: this._translate.translate(
							'The answer is incorrect'
						)
					});
				}
			});
	}
}
