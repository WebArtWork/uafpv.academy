import { Injectable } from '@angular/core';
import { Schoollesson } from '../interfaces/schoollesson.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class SchoollessonService extends CrudService<Schoollesson> {
	schoollessons: Schoollesson[] = this.getDocs();

	schoollessonsByCourse: Record<string, Schoollesson[]> = {};

	schoollessonsByAuthor: Record<string, Schoollesson[]> = {};

	constructor() {
		super({
			name: 'schoollesson'
		});

		this.get();

		this.filteredDocuments(
			this.schoollessonsByCourse,
			'course',
			undefined,
			(a, b) => a.order - b.order
		);
		this.filteredDocuments(
			this.schoollessonsByAuthor,
			'author',
			undefined,
			(a, b) => a.order - b.order
		);
	}
}
