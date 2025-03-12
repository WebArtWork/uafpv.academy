import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schoolcertificate } from 'src/app/modules/schoolcertificate/interfaces/schoolcertificate.interface';
import { SchoolcertificateService } from 'src/app/modules/schoolcertificate/services/schoolcertificate.service';
import { Schoolcourse } from 'src/app/modules/schoolcourse/interfaces/schoolcourse.interface';
import { SchoolcourseService } from 'src/app/modules/schoolcourse/services/schoolcourse.service';
import { Schoollesson } from 'src/app/modules/schoollesson/interfaces/schoollesson.interface';
import { SchoollessonService } from 'src/app/modules/schoollesson/services/schoollesson.service';
import { Schooltest } from 'src/app/modules/schooltest/interfaces/schooltest.interface';
import { SchooltestService } from 'src/app/modules/schooltest/services/schooltest.service';
import { UserService } from 'src/app/modules/user/services/user.service';
import { CoreService, HttpService } from 'wacom';

@Component({
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss'],
	standalone: false
})
export class CourseComponent {
	get allowedNextLesson(): boolean {
		return this.testsIds.every((_id) =>
			this.certificate.tests.includes(_id)
		);
	}

	show: 'view' | 'lesson' | 'buy' = 'view';

	courseId: string;

	sessionId: string;

	course: Schoolcourse;

	isMenuOpen = false;

	certificate: Schoolcertificate;
	// certificate = this._ss.doc(this._router.url.replace('/progress/', ''));

	allLessons: Schoollesson[] = [];

	lessons: Schoollesson[] = [];

	lesson: Schoollesson;

	tests: Schooltest[] = [];

	testsIds: string[] = [];

	constructor(
		public userService: UserService,
		private _ss: SchoolcertificateService,
		private _scs: SchoolcourseService,
		private _sts: SchooltestService,
		private _sls: SchoollessonService,
		private _http: HttpService,
		private _core: CoreService,
		private _router: Router,
		private _route: ActivatedRoute
	) {
		this._route.paramMap.subscribe((resp) => {
			this.courseId = resp.get('course_id') || '';

			this.course = this._scs.doc(this.courseId);

			this.sessionId = resp.get('session_id') || '';
		});

		this._core.onComplete('schoolcertificate_loaded').then(() => {
			const certificate = this._ss.schoolcertificates.find(
				(c) => c.course === this.courseId
			);

			if (certificate) {
				this.certificate = certificate;
			}
		});

		this._loadLessons();
	}

	nextLesson(): void {
		this.certificate.lessons.push(this.lesson._id);

		this._http.post('/api/school/certificate/lesson', {
			certificate: this.certificate,
			lesson: this.lesson
		});

		this._addNextLesson();

		this._loadTests();
	}

	setLesson(id: string): void {
		if (this.certificate) {
			this.lesson = this.allLessons.filter((al) => al._id === id)[0];

			this.show = 'lesson';
		}
	}

	back(): void {
		window.history.back();
	}

	buy(): void {
		if (this.userService.user.email) {
			this.show = 'buy';
		} else {
			this._router.navigateByUrl('/sign');
		}
	}

	private _loadLessons(): void {
		this._sls
			.get(
				{
					query: 'course=' + this.courseId
				},
				{
					name: 'public'
				}
			)
			.subscribe((lessons) => {
				lessons = lessons.sort((a, b) => a.order - b.order);

				this.allLessons.push(...lessons);

				if (this.certificate?.lessons?.length) {
					this.lessons.push(
						...this.allLessons.filter((l) =>
							this.certificate.lessons.includes(l._id)
						)
					);
				}

				this._addNextLesson();

				this._loadTests();
			});
	}

	private _addNextLesson(): void {
		if (this.certificate?.lessons?.length !== this.allLessons.length) {
			const ids = this.lessons.map((l) => l._id);

			this.lesson = this.allLessons.filter(
				(al) => !ids.includes(al._id)
			)[0];

			this.lessons.push(this.lesson);
		}
	}

	private _loadTests(): void {
		this.tests = [];

		this._sts
			.get(
				{
					query: 'lesson=' + this.lesson._id
				},
				{
					name: 'public'
				}
			)
			.subscribe((tests) => {
				this.tests = tests;

				this.testsIds = tests.map((t) => t._id);
			});
	}
}
