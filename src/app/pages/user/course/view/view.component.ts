import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schoolcourse } from 'src/app/modules/schoolcourse/interfaces/schoolcourse.interface';
import { SchoolcourseService } from 'src/app/modules/schoolcourse/services/schoolcourse.service';
import { Schoollesson } from 'src/app/modules/schoollesson/interfaces/schoollesson.interface';

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
