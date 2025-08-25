import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schoolcourse } from 'src/app/modules/school/interfaces/schoolcourse.interface';
import { Schoollesson } from 'src/app/modules/school/interfaces/schoollesson.interface';
import { SchoolcourseService } from 'src/app/modules/school/services/schoolcourse.service';

@Component({
	selector: 'app-view',
	standalone: false,
	templateUrl: './view.component.html',
	styleUrl: './view.component.scss'
})
export class ViewComponent {
	@Input() course: Schoolcourse;

	@Input() lessons: Schoollesson[] = [];

	@Output() selectLesson = new EventEmitter();

	constructor(public scs: SchoolcourseService) {}
}
